import React from 'react';
import styled from 'styled-components';
import * as BlogAPI from '../../BlogAPI';

const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Post = styled.h5`
  margin: 5px 0;
`

const CatTitle = styled.div`
  margin: 0 10px;
  width: 400px;
  padding: 10px;
  font-size: 24px;
  background: green;
`

export class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    BlogAPI.getCategoryPosts(this.props.category.path).then((posts) => {
      this.setState({
        posts
      });
    });
  }

  render () {
    const { name } = this.props.category;
    return (
      <CatContainer>
        <CatTitle>{name}</CatTitle>
        { this.state.posts.map((post, index) =>
          <Post key={index}>{post.title}</Post>
        )}
      </CatContainer>
    )
  }
}

export default Category;