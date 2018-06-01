import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../App.css';
import Header from '../components/header';
import Category from '../components/Category';
import Post from '../components/PostItem';
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
              <Route path="/" exact component={Default} />
              <Route path="/post" exact component={Post} />
              <Route path="/create-edit-view" exact component={CreateEdit} />
              <Route path="/:category" exact component={Category} />
            </Switch>
          </Body>
        </div>
      </Provider>
    );
  }
}

export default App;
