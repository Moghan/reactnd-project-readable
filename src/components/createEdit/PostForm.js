import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../../app/actions';
import uuidv4 from 'uuid/v4';


const CloseCreateContact = styled.button`
`
const CreateContactForm = styled.form`
  background-color: grey;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
`
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 400px;
 `
 const AddContactButton = styled.button`
  margin: 10px 0;
 `
const Input = styled.input`
  margin: 5px 0;
`

const InputMessage = styled.textarea`
`

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
    const { author, title, category, body } = this.state;

    if(author && title && category && body) {
      const timestamp = Date.now();
      const id = uuidv4();


      this.props.addPost({
        id,
        author,
        title,
        category,
        body,
        timestamp,
        voteScore: 1,
        deleted: false,
        category: "react"
      })
    }
  }
  render () {
    console.log("state , ", this.state);
    return (
      <div>
        <CreateContactForm onSubmit={this.handleSubmit}>
          <ContactDetails>
            <Input type='text' name='title' placeholder='Title' onChange={this.handleChange}/>
            <Input type='text' name='author' placeholder='Author' onChange={this.handleChange}/>
            <Input type='text' name='category' placeholder='Category' onChange={this.handleChange}/>
            <InputMessage name="body" rows="10" cols="30" onChange={this.handleChange}>Write your post here.</InputMessage>
            <AddContactButton>Create Post</AddContactButton>
          </ContactDetails>
        </CreateContactForm>
        <Link to='/'>
          <CloseCreateContact>
            Close
          </CloseCreateContact>
        </Link>
        {this.state.value}
      </div>
    )
  }
}

const mapStateToProps = ({ comments, categories }) => {
  return {
    comments,
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => dispatch(addPost(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);