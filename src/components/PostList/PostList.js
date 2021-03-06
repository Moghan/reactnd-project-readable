import React from 'react';
import { connect } from 'react-redux';
import PostItem from '../PostItem';
import { deletePost } from '../../app/actions';

export class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deletePost(id);
  }
  render () {
    const { posts = [], sortBy, filterBy} = this.props;
    return (
      <div>
        { posts
            .sort((a,b) => {
              if(sortBy === 'timestamp') {
                return a.timestamp < b.timestamp;
              }
              else if(sortBy === 'voteScore') {
                return a.voteScore < b.voteScore;
              }
              else return 0;
            })
            .filter((post) => {
              switch(filterBy) {
                case "react": return post.category === "react";
                case "redux": return post.category === "redux";
                case "udacity": return post.category === "udacity";
                default: return true; 
              }
            })
            .map((post, index) =>
              <PostItem key={index} post={post} handleDelete={this.handleDelete}/>
        )}        
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    sortBy: posts.sortBy,
  }
}

const mapDispatchToProps = ((dispatch) => {
  return {
    deletePost: id => dispatch(deletePost(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);