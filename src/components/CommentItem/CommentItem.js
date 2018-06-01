import React from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';

const CommentContainer = styled.div`
  margin: 5px 0;
`
const Header = styled.div`
  display: flex;
  font-size: small;
  margin-bottom: 3px;
`;
const Body = styled.div`;`
const Text = styled.div``
const Author = styled.div`
  margin-right: 5px;
  font-weight: bold;
`
const Date = styled.div`
  margin: 0 5px;
`

export class CommentItem extends React.Component {
  render() {
    const {
      body,
      timestamp,
      author
    } = this.props.comment;
    console.log(this.props.comment);
    return (
      <CommentContainer>
        <Header>
          <Author>{author}</Author>
          commented
          <Date>
            <Timestamp time={timestamp} format='date' />
          </Date>
        </Header>
        <Body>
          <Text>
            { body }
          </Text>
        </Body>
      </CommentContainer>
    )
  }
}