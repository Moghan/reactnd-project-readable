import React from 'react';
import styled from 'styled-components';
import Category from './category';
import * as BlogAPI from '../../BlogAPI';

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin: 10px auto;
  background: lightgrey;
`

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }
  componentWillMount() {
    BlogAPI.getCategories().then((cats) => {
      this.setState({
        cats: cats
      });
    });
  }

  render () {
    console.log(this.state);
    return (
      <Page>
        { this.state.cats.map((cat, index) => <Category key={index} category={cat} /> )}        
      </Page>
    )
  }
}

export default Categories;