import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostForm from './PostForm';


export class CreateEdit extends React.Component {
  render () {
    return (
      <div>
         <PostForm />
      </div>
    )
  }
}

export default CreateEdit;