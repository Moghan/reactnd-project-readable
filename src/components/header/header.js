import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SysbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  border: 3px solid green;
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

export default () => (
  <header className="App-header">
    <SysbarContainer>
      <Link to="/">
        <Title className="App-title">Welcome to Project Readable</Title>
      </ Link>
      <Link to="/create-edit-view">
        <Categories>Categories</ Categories>
        <CreatePostButton>Create New Post</CreatePostButton>
      </Link>
    </SysbarContainer>
  </header>
);