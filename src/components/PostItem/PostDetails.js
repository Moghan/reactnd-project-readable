import React from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { deletePost } from '../../app/actions';
import { withRouter } from 'react-router-dom';

export class PostDetails extends React.Component {
  handleDelete = post_id => {
    this.props.deletePost(post_id);
    this.props.history.push("/");
  }

  componentDidUpdate() {
    if (this.props.match.params.post_id && !this.props.post.length) { 
      this.props.history.replace(`/404/${this.props.match.params.post_id}`);
    }
  }

  render () {
    const [ post ] = this.props.post;
    
    return (
      <div>
        { post &&
          <PostItem post={post} showComments handleDelete={this.handleDelete}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({posts: {posts: postList = []}}, ownProps) => {
  return {
    post: postList.filter((post) => post.id === ownProps.match.params.post_id),
  }
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: post_id => dispatch(deletePost(post_id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));