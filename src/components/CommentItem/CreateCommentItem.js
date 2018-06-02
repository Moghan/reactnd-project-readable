import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';


const InputAuthor = styled.input``
const InputComment = styled.input`
  min-width: 400px;
`
const Submit = styled.button``
const Cancel = styled.button``

export default class CreateCommit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
    this.handleOnClickCancel = this.handleOnClickCancel.bind(this);
  }

  handleOnClickCancel() {
    this.setState({
      author: '',
      body: ''
    });
    this.props.handleCancel();
  }

  handleOnClickSubmit() {
    const comment = {
      id: uuidv4(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      voteScore: 1
    };
    this.props.handleSubmit(comment);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <InputAuthor type='text' name='author' placeholder='Author' onChange={this.handleChange}/>
        <InputComment type='text' name='body' placeholder='Comment' onChange={this.handleChange}/>
        <Submit disabled={!(this.state.author.length && this.state.body.length)} onClick={this.handleOnClickSubmit}>Submit</Submit>
        <Cancel onClick={this.handleOnClickCancel}>Cancel</Cancel>
      </div>
    );
  }
}