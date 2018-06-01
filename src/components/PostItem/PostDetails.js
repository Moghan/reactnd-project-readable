import React from 'react';
import * as BlogAPI from '../../BlogAPI';
import Post from './PostItem';

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: false
    }
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
          <Post post={post} showComments/>
        }
      </div>
    )
  }
}