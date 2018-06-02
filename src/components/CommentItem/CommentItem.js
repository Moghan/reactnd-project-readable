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
const BtnEdit = styled.button`
  font-size: 0.5rem;
  padding: 0 4px;
  margin-left: 10px;
`
const BtnSubmit = styled.button`
  font-size: 0.5rem;
  padding: 0 4px;
  margin-left: 10px;
`
const BtnDelete = styled.button`
  padding: 0 4px;
  font-size: 0.5rem;
`
const BtnCancel = styled.button`
  padding: 0 4px;
  font-size: 0.5rem;
`
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
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
  }

  handleOnClickDelete() {
    const { id, parentId } = this.props.comment;
    this.props.handleDelete(id, parentId);
  }

  handleOnClickEdit() {
    this.props.handleEdit(this.props.comment.id);
  }

  render() {
    const {
      body,
      timestamp,
      author
    } = this.props.comment;

    return (
      <CommentContainer>
        <Header>
          <Author>{author}</Author>
          commented
          <Date>
            <Timestamp time={timestamp} format='date' />
          </Date>
          <BtnEdit onClick={this.handleOnClickEdit}>Edit</BtnEdit>
          <BtnDelete onClick={this.handleOnClickDelete}>Delete</BtnDelete>
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