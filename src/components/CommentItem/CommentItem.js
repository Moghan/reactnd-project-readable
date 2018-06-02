import React from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { voteComment } from '../../app/actions';

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

const BtnDelete = styled.button`
  padding: 0 4px;
  font-size: 0.5rem;
  margin-right: 10px;
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

const VoteScore = styled.div`
  margin: 0 5px;
`

const BtnVote = styled.button`
  font-size: 0.5rem;
`

export class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
    this.handleOnUpVote = this.handleOnUpVote.bind(this);
    this.handleOnDownVote = this.handleOnDownVote.bind(this);
  }

  handleOnUpVote() {
    const { id, parentId } = this.props.comment;
    this.props.voteComment(id, parentId, "upVote");
  }

  handleOnDownVote() {
    const { id, parentId } = this.props.comment;
    this.props.voteComment(id, parentId, "downVote");
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
      author,
      voteScore
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
          VoteScore :
          <VoteScore>{voteScore}</VoteScore>
          <BtnVote onClick={this.handleOnUpVote}>Up</BtnVote>
          <BtnVote onClick={this.handleOnDownVote}>Down</BtnVote>
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

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
  return {
    voteComment: (comment_id, post_id, vote) => dispatch(voteComment(comment_id, post_id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);