import React from 'react';
import { CommentItem } from '../CommentItem/CommentItem';

export default class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        { comments.map((comment, index) => (
          <CommentItem key={index} comment={comment}/>
        ))}
      </div>
    )
  }
}