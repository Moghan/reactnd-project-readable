import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
`

const Message = styled.h3`
  width: 300px;
  margin: 100px auto 20px auto;
`
const PostId = styled.div`
  width: 300px;
  margin: 40px auto;
`

const PageNotFound = (props) => {
  return (    
    <MainContainer>
      <Message>Post not found !</Message>
      <PostId>Searched postId: {props.match.params.post_id}</PostId>
    </MainContainer>
  )
}

export default PageNotFound;