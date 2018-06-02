import React from 'react';
import styled from 'styled-components';
import { upVote, downVote } from '../../app/actions';
import { connect } from 'react-redux';
import * as BlogAPI from '../../BlogAPI';
import CommentList from '../CommentList';
import CreateComment  from '../CommentItem/CreateCommentItem';
import { increaseCommentCount, setComments, addComment } from '../../app/actions';
import { Link, withRouter } from 'react-router-dom';
import Timestamp from 'react-timestamp';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  
`

const PostContainer = styled.div`
  display: flex;
  border-top: 2px solid black;
`
const BodyContainer = styled.div`
  flex: display;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  width: 70px;
  background-color: lightgrey;
  margin: 0 3px;
`
const Image = styled.div`
  height: 70px;
  width: 70px;
  background-color: green;
  margin: 0 3px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentCount = styled.h5`
  margin: 2px 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const CommentsContainer = styled.div`
  margin: 5px 50px;
`

const PostText = styled.div`
  margin: 5px 50px;
  min-height: 70px;
`

const ScoreValue = styled.div`
  margin: 0 auto;
`

const BtnIncrease = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 auto;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const BtnDecrease = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 auto;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const BtnEdit = styled.button`
  align-self: flex-start;
`

const BtnDelete = styled.button`
  align-self: flex-start;
`

const BtnMakeComment = styled.button`
  margin: 5px 50px;
  width: 160px;
`

const Title = styled.h5`
  margin: 0 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Date = styled.div`
  margin: 0 20px;
  font-size: 0.8rem;
  font-weight: lighter;
`


export class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComments: this.props.showComments,
      comments: [],
      makingComment: false
    }

    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleOnClickTitle = this.handleOnClickTitle.bind(this);
    this.handleMakeComment = this.handleMakeComment.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
    this.handleOnClickComments = this.handleOnClickComments.bind(this);
  }

  loadComments() {
    BlogAPI.getPostComments(this.props.post.id).then((comments) => {
      this.props.setComments(this.props.post.id, comments);
    });
  }

  componentDidMount() {
    this.loadComments();
  }

  handleSubmit(comment) {
    comment = {
      ...comment,
      parentId: this.props.post.id
    }
    this.props.increaseCommentCount(this.props.post.id);
    this.props.addComment(this.props.post.id, comment);
    this.setState({
      makingComment: false
    })
  }

  handleCancel() {
    this.setState({
      makingComment: false
    });
  }

  handleOnClickDelete() {
    this.props.handleDelete(this.props.post.id);
  }

  handleMakeComment() {
    this.setState((prevState) => ({
      ...prevState,
      makingComment: true
    }));
  }

  handleUpVote() {
    this.props.upVote(this.props.post.id);
  }

  handleDownVote() {
    this.props.downVote(this.props.post.id);
  }

  handleOnClickTitle() {   
  }

  handleOnClickComments() {
    this.setState((prevState) => ({
      showComments: !prevState.showComments
    }));  
  }

  render () {
    const {
      title = 'anonomous',
      timestamp = 'timeless',
      commentCount = 0,
      voteScore = 0,
      body,
      id,
      category
    } = this.props.post;
    const {
      showComments,
      makingComment
    } = this.state;
    //const comments = this.state.comments.filter((comment) => comment.parentId === id);
    const { comments = [] } = this.props;

    const LinkedTitle = withRouter(({history}) => (
      <Title onClick={() => {history.push(`/${category}/${id}`)}}>{title}</Title>
    ));

    return (
      <MainContainer>
        <PostContainer>
          <ScoreContainer>
            <BtnIncrease name='upvote' onClick={this.handleUpVote}>+</BtnIncrease>
            <ScoreValue>{voteScore}</ ScoreValue>
            <BtnDecrease onClick={this.handleDownVote}>-</BtnDecrease>
          </ ScoreContainer>
          <Image />
          <InfoContainer>
            <LinkedTitle />
            <Date>
              <Timestamp time={timestamp} format='date' />
            </Date>
            <CommentCount onClick={this.handleOnClickComments}>Comments: {commentCount}</CommentCount>
          </ InfoContainer>
          <Link to={`/create-edit-view/${id}`} style={{marginLeft: "auto"}}>
            <BtnEdit>Edit</BtnEdit>
          </Link>
          <BtnDelete onClick={this.handleOnClickDelete}>Delete</BtnDelete>
        </PostContainer>
        { showComments && 
          <BodyContainer>
            <PostText>
              { body }
            </PostText>
            { comments.length > 0 &&
              <CommentsContainer>
                  <CommentList comments={comments}/>
              </CommentsContainer>
            }
          </BodyContainer>
        }
        {
          makingComment ?
            <CreateComment handleCancel={this.handleCancel} handleSubmit={this.handleSubmit}/>
          :
            <BtnMakeComment onClick={this.handleMakeComment}>
              Make comment
            </BtnMakeComment>
        }
      </MainContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVote(id)),
    downVote: (id) => dispatch(downVote(id)),
    increaseCommentCount: (postId) => dispatch(increaseCommentCount(postId)),
    setComments: (id, comments) => dispatch(setComments(id, comments)),
    addComment: (id, comment) => dispatch(addComment(id, comment)),
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments[ownProps.post.id]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);