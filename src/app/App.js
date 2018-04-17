import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../App.css';
import Header from '../components/header';
import Categories from '../components/categories';
import Post from '../components/post';
import Default from '../components/default';
import CreateEdit from '../components/createEdit';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className='App'>
          <Header />
          <Router>
            <div>
              <Route path="/" exact component={Default} />
              <Route path="/categories" exact component={Categories} />
              <Route path="/post" exact component={Post} />
              <Route path="/create-edit-view" exact component={CreateEdit} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
