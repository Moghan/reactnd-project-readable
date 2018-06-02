import React from 'react';
//import logo from '../../logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSortBy } from '../../app/actions';

const SysbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: 0 auto;

`
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const SecContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const CategoriesContainer = styled.div``

const CategoryButton = styled.button`
  margin: 0 5px;
`


const Title = styled.h1`
  color: white;
`

const CreatePostButton = styled.button`
  margin: 0 50px;
  height: 100%;
`

const SortByPicker = styled.div`
`

export class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.setSortBy(event.target.value);
  }

  render() {
    const { categories = [] } = this.props;
    return (
      <header className="App-header">
        <SysbarContainer>
          <MainContainer>
            <Link to="/">
              <Title className="App-title">Welcome to Project Readable</Title>
            </Link>
            <Link to="/create-edit-view">
              <CreatePostButton>Create New Post</CreatePostButton>
            </Link>
          </MainContainer>
          <SecContainer>
            <SortByPicker>
              SortBy
              <select onChange={this.handleOnChange}>
                <option value="timestamp">Date</option>
                <option value="voteScore">Votes</option>
              </select>       
            </SortByPicker>
            <CategoriesContainer>
              <CategoryButton onClick={this.handleSetFilter}>
                <Link to={`/all`}>
                  All
                </Link>
              </CategoryButton>
              { categories.map((category, index) => (
                <CategoryButton key={index}>
                  <Link to={`/${category.path}`}>
                    { category.name }
                  </Link>
                </CategoryButton>
              ))}
            </CategoriesContainer>
          </SecContainer>
        </SysbarContainer>
      </header>
    )
  }
}

const mapStateToProps = ({ posts, categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);