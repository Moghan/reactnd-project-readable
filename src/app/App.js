import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../App.css';
import Header from '../components/header';
import Category from '../components/Category';
import Post from '../components/PostItem';
import PostDetails from '../components/PostItem/PostDetails';
import Default from '../components/default';
import EditPost from '../components/createEdit/editPost';
import CreatePost from '../components/createEdit/createPost';
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
      this.props.store.dispatch(setPosts(posts));
    });
    BlogAPI.getCategories().then((categories) => {
      this.props.store.dispatch(setCategories(categories));
    });
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className='App'>
          <Header />
          <Body>
            <Switch>
              <Route exact path="/" component={Default} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/create-edit-view" component={CreatePost} />
              <Route exact path="/create-edit-view/:post_id" component={EditPost} />
              <Route exact path="/:category" component={Category} />
              <Route exact path="/:category/:post_id" component={PostDetails} />
            </Switch>
          </Body>
        </div>
      </Provider>
    );
  }
}

export default App;
