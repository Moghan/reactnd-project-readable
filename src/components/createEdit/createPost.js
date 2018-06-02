import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
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
const Select = styled.select`
  margin: 5px 0;
`

const InputMessage = styled.textarea`
`

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModified: false,
      isDefaultValuesSet: false,
      title: '',
      author: '',
      category: 'react',
      body: 'Write your post here.',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      isModified: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { author, title, category, body } = this.state;

    const timestamp = new Date();
    const id = uuidv4();

    this.props.addPost({
      id,
      author,
      title,
      body,
      timestamp,
      voteScore: 1,
      deleted: false,
      category,
      commentCount: 0
    });

    this.props.history.push("/");
  }

  render () {
    const {
      title,
      author,
      category,
      body
    } = this.state;

    return (
      <div>
        <CreateContactForm onSubmit={this.handleSubmit}>
          <ContactDetails>
            <Input id='title' type='text' name='title' defaultValue={title} placeholder='Title' onChange={this.handleChange}/>
            <Input id='author' type='text' name='author' defaultValue={author} placeholder='Author' onChange={this.handleChange}/>
            <Select id='category' name='category' defaultValue={category} onChange={this.handleChange}>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </Select>
            <InputMessage id='body' name="body" rows="10" cols="30" onChange={this.handleChange} defaultValue={body}></InputMessage>
            <AddContactButton disabled={!this.state.isModified || !(author && title && category && body)} onClick={this.handleSubmit}>{this.props.match.params.post_id ? 'Submit edit' : 'Create Post'}</AddContactButton>
            <Link to='/'>
              <CloseCreateContact>
                Cancel
              </CloseCreateContact>
            </Link>
          </ContactDetails>
        </CreateContactForm>
        {this.state.value}
      </div>
    )
  }
}
const mapStateToProps = ({ posts, categories }, ownProps) => {
  return {
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => dispatch(addPost(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));