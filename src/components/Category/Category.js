import React from 'react';
import PostList from '../PostList';

export default class Category extends React.Component {
  render() {
    return (
      <PostList filterBy={this.props.match.params.category}/>
    )
  }
}