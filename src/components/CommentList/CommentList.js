import React from 'react';
import { CommentItem } from '../CommentItem/CommentItem';
import CommentItemEdit from '../CommentItem/CommentItemEdit';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../app/actions';

export class CommentList extends React.Component {
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
    this.setState({
      editCommentId: false
    })
    this.props.editComment(comment.parentId, comment.id, comment);
  }

  handleDelete(comment_id, post_id) {
    this.props.deleteComment(comment_id, post_id);
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    editComment: (post_id, comment_id, body) => dispatch(editComment(post_id, comment_id, body)),
    deleteComment: (comment_id, post_id) => dispatch(deleteComment(comment_id, post_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);