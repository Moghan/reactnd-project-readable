import React from 'react';
//import logo from '../../logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSortBy, setFilterBy } from '../../app/actions';

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
  border: 3px solid green;
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

const Categories = styled.button`
  margin: 0 5px;
  height: 100%;
`

const SortByPicker = styled.div`
`

export class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSetFilter = this.handleSetFilter.bind(this);
  }

  handleOnChange(event) {
    this.props.setSortBy(event.target.value);
  }

  handleSetFilter(event) {
    //console.log(event.target.value);
    this.props.setFilterBy(event.target.value);
  }

  


  render() {
    //console.log(this.props.categories);
    const { categories = [] } = this.props;
    return (
      <header className="App-header">
        <SysbarContainer>
          <MainContainer>
            <Link to="/">
              <Title className="App-title">Welcome to Project Readable</Title>
            </Link>
            <Link to="/create-edit-view">
              <Categories>Categories</ Categories>
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
              <CategoryButton onClick={this.handleSetFilter} value="All">
                  All
              </CategoryButton>
              { categories.map((category, index) => (
                <CategoryButton key={index} onClick={this.handleSetFilter} value={category.name}>
                  { category.name }
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
    setFilterBy: (filterBy) => dispatch(setFilterBy(filterBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);