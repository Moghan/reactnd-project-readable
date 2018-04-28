import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flow-direction: columns;
  margin: 10px 50px;
`

const Title = styled.div`
  font-weight: bold;
  width: 400px;
  margin: 0 20px;
  border: 2px solid red;
`

const Timestamp = styled.div`
  margin: 0 20px;
  width: 200px
  border: 2px solid red;
`



export class Post extends React.Component {
  render () {
    const { title = 'anonomous', timestamp = 'timeless' } = this.props.post
    return (
      <PostContainer>
        <Title>{title}</Title>
        <Timestamp>{timestamp}</Timestamp>
      </PostContainer>
    )
  }
}

export default Post;