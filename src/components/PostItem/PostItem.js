import React from 'react';
import styled from 'styled-components';
import { upVote, downVote } from '../../app/actions';
import { connect } from 'react-redux';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border: 2px solid red;
`

const PostContainer = styled.div`
  display: flex;
  margin: 0 50px;
  border: 2px solid red;
`
const BodyContainer = styled.div`
  flex: display;
  margin: 5px 50px;
  min-height: 100px;
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
const Comments = styled.h5`
  margin: 2px 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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

    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote() {
    this.props.upVote(this.props.post.id);
  }

  handleDownVote() {
    this.props.downVote(this.props.post.id);
  }

  render () {
    const {
      title = 'anonomous',
      timestamp = 'timeless',
      commentCount = 0,
      voteScore = 0,
      body,
    } = this.props.post;
    const { showAll } = this.props;

    return (
      <MainContainer>
        <PostContainer>
          <ScoreContainer>
            <BtnIncrease name='upvote' onClick={this.handleUpVote}>+</ BtnIncrease>
            <ScoreValue>{voteScore}</ ScoreValue>
            <BtnDecrease onClick={this.handleDownVote}>-</ BtnDecrease>
          </ ScoreContainer>
          <Image />
          <InfoContainer>
            <Title>{title}</Title>
            <Timestamp>{timestamp}</Timestamp>
            <Comments>Comments: {commentCount}</ Comments>
          </ InfoContainer>
        </PostContainer>
        { showAll && 
          <BodyContainer>
            { body }
          </BodyContainer>
        }
      </MainContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVote(id)),
    downVote: (id) => dispatch(downVote(id))
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);