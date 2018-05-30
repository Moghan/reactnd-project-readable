import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const CatContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`
const Post = styled.h5`
  margin: 5px 0;
`

const CatTitle = styled.div`
  margin: 0 10px;
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
  }

  render () {
    const { name } = this.props.category;
    return (
      <CatContainer>
        <CatTitle>{name}</CatTitle>
        { this.props.posts
          .filter((post) => post.category === name)
          .map((post, index) =>
            <Post key={index}>{post.title}</Post>
        )}
      </CatContainer>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

export default connect(mapStateToProps)(Category);