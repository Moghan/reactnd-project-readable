import React from 'react';
import { connect } from 'react-redux';
import PostItem from '../PostItem';
import * as BlogAPI from '../../BlogAPI';
import { deletePost } from '../../app/actions';

export class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    console.log("TODO: postlist, edit");
  }

  handleDelete(id) {
    this.props.deletePost(id);
    BlogAPI.deletePost(id);
  }
  render () {
    const { posts = [], sortBy, filterBy} = this.props;
    return (
      <div>
        { posts
            .sort((a,b) => {
              if(sortBy === 'timestamp') {
                return a.timestamp > b.timestamp ? 1: -1;
              }
              else if(sortBy === 'voteScore') {
                return a.voteScore < b.voteScore ? 1: -1;
              }
              else return 0; // TODO: throw exception
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
              <PostItem key={index} post={post} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
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