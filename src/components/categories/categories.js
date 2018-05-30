import React from 'react';
import styled from 'styled-components';
import Category from './category';
import * as BlogAPI from '../../BlogAPI';
import { connect } from 'react-redux';

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin: 10px auto;
  background: lightgrey;
  border: 2px solid red;
`

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  render () {
    console.log(this.props);
    return (
      <Page>
          { this.props.categories && this.props.categories.map((cat, index) => <Category key={index} category={cat} /> )}      
      </Page>
    )
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categories
  };
};

export default connect(mapStateToProps)(Categories);