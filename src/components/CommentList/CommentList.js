import React from 'react';
import { CommentItem } from '../CommentItem/CommentItem';
import CommentItemEdit from '../CommentItem/CommentItemEdit';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editCommentId: false
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(comment) {
    console.log("submit, ", comment);
    this.setState({
      editCommentId: false
    })
  }

  handleDelete() {
    console.log("delete");
  }

  handleCancel() {
    console.log("cancel");
    this.setState({
      editCommentId: false
    })
  }

  handleEdit(id) {
    console.log("edit", id);
    this.setState({
      editCommentId: id
    })
  }

  render() {
    const { comments } = this.props;
    const { editCommentId } = this.state;
    return (
      <div>
        { comments.map((comment, index) =>
          editCommentId === comment.id ?
            <CommentItemEdit key={index} comment={comment} handleCancel={this.handleCancel} handleSubmit={this.handleSubmit}/>:
            <CommentItem key={index} comment={comment} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
        )}
      </div>
    )
  }
}