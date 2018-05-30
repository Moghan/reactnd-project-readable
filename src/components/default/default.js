import React from 'react';
import Post from '../post';
import { connect } from 'react-redux';

export class Default extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };    
  }
  
  render () {
    const { posts = []} = this.props;
    console.log(posts);
    return (
      <div>
        { posts.map((post, index) =>
          <Post key={index} post={post}/>
        )}        
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

export default connect(mapStateToProps)(Default);