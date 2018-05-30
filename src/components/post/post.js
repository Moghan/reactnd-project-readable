import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flow-direction: columns;
  margin: 10px 50px;
  border: 2px solid red;
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

const Image = styled.div`
  height: 70px;
  width: 70px;
  background-color: green;
  margin: 0 3px;
`

const Title = styled.h5`
  margin: 0 20px;
  border: 2px solid red;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Timestamp = styled.h6`
  margin: 0 20px;
  font-weight: lighter;
  border: 2px solid red;
`

const Comments = styled.h5`
  margin: 2px 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`


export class Post extends React.Component {
  render () {
    const { title = 'anonomous', timestamp = 'timeless', commentCount = 0, voteScore = 0 } = this.props.post
    return (
      <PostContainer>
        <ScoreContainer>
          <BtnIncrease>+</ BtnIncrease>
          <ScoreValue>{voteScore}</ ScoreValue>
          <BtnDecrease>-</ BtnDecrease>
        </ ScoreContainer>
        <Image />
        <InfoContainer>
          <Title>{title}</Title>
          <Timestamp>{timestamp}</Timestamp>
          <Comments>Comments: {commentCount}</ Comments>
        </ InfoContainer>
      </PostContainer>
    )
  }
}

export default Post;