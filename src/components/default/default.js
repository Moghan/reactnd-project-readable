import * as BlogAPI from '../../BlogAPI'
import React from 'react';
import Post from '../post';

export class Default extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };    
  }
  
  componentWillMount() {
    BlogAPI.getAll().then((posts) => {
      this.setState({
        posts: posts
      });
    });
  }

  componentDidMount()  {
    BlogAPI.getCategories().then((cats) => {
    });
  }

  render () {
    return (
      <div>
        {this.state.posts.map((post, index) =>
          <Post key={index} post={post}/>
        )}        
      </div>
    )
  }
}

export default Default;