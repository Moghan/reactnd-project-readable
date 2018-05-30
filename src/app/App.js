import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../App.css';
import Header from '../components/header';
import Categories from '../components/categories';
import Post from '../components/post';
import Default from '../components/default';
import CreateEdit from '../components/createEdit';
import styled from 'styled-components';
import * as BlogAPI from '../BlogAPI';
import { setCategories, setPosts } from './actions';

const Body = styled.div`
  width: 80%;
  margin: 0 auto;
`

class App extends Component {
  componentDidMount() {
    BlogAPI.getPosts().then((posts) => {
      console.log(posts);
      this.props.store.dispatch(setPosts(posts));
    });
    BlogAPI.getCategories().then((categories) => {
      this.props.store.dispatch(setCategories(categories));
    });
    //console.log('cats ', this.props.store.categories);
    /*
      for (const category of categories) {
        console.log(category);
        BlogAPI.getCategoryPosts(category.path).then((posts) => {
          console.log('posts : ', posts);
          this.props.store.dispatch(setPosts({posts, category}))
        });
      }

    for (const category of this.props.store.categories) {
      BlogAPI.getCategoryPosts(category).then((posts) => {
        this.props.store.dispatch(setPosts({posts, category}))
      });
    };*/
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className='App'>
          <Header />
          <Body>
            <Route path="/" exact component={Default} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/post" exact component={Post} />
            <Route path="/create-edit-view" exact component={CreateEdit} />
          </Body>
        </div>
      </Provider>
    );
  }
}

export default App;
