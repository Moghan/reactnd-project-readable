import React from 'react';
import styled from 'styled-components';
import { upVote, downVote } from '../../app/actions';
import { connect } from 'react-redux';
import * as BlogAPI from '../../BlogAPI';
import CommentList from '../CommentList';
import CreateComment  from '../CommentItem/CreateCommentItem';
import { increaseCommentCount } from '../../app/actions';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border: 2px solid red;
`

const PostContainer = styled.div`
  display: flex;
  border: 2px solid red;
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

const BtnMakeComment = styled.button`
  margin: 5px 50px;
  width: 160px;
`

const Title = styled.h5`
  margin: 0 20px;
  border: 2px solid red;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`


const Timestamp = styled.h6`
  margin: 0 20px;
  font-weight: lighter;
  border: 2px solid red;
`




export class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: this.props.showAll,
      comments: [],
      makingComment: false
    }

    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleOnClickPost = this.handleOnClickPost.bind(this);
    this.handleMakeComment = this.handleMakeComment.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadComments() {
    BlogAPI.getPostComments(this.props.post.id).then((comments) => {
      this.setState( {
        comments
      });
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
    BlogAPI.addComment(comment);
    this.loadComments();
    this.setState({
      makingComment: false
    })
  }

  handleCancel() {
    this.setState({
      makingComment: false
    });
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

  handleOnClickPost() {
    this.setState((prevState) => ({
      ...prevState,
      showAll: !prevState.showAll
    }));     
  }

  render () {
    const {
      title = 'anonomous',
      timestamp = 'timeless',
      commentCount = 0,
      voteScore = 0,
      body,
      id
    } = this.props.post;
    const {
      showAll,
      makingComment
    } = this.state;
    const comments = this.state.comments.filter((comment) => comment.parentId === id);

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
            <Title onClick={this.handleOnClickPost}>{title}</Title>
            <Timestamp>{timestamp}</Timestamp>
            <CommentCount>Comments: {commentCount}</CommentCount>
          </ InfoContainer>
        </PostContainer>
        { showAll && 
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
    increaseCommentCount: (postId) => dispatch(increaseCommentCount(postId))
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);