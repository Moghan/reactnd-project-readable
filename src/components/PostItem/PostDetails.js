import React from 'react';
import * as BlogAPI from '../../BlogAPI';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { deletePost } from '../../app/actions';
import { withRouter } from 'react-router-dom';

export class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: false
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(post_id) {
    this.props.deletePost(post_id);
    this.props.history.push("/");
  }

  componentDidMount() {
    BlogAPI.getPost(this.props.match.params.post_id)
      .then((res) => {return(res.json())})
      .then((post) => {
        this.setState({
          post
        });
    });
  }

  render () {
    const { post } = this.state;
    return (
      <div>
        { post &&
          <PostItem post={post} showComments handleDelete={this.handleDelete}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: post_id => dispatch(deletePost(post_id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));