import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost } from '../../app/actions';

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
      post: {
        title: '',
        author: '',
        category: '',
        body: 'Write your post here.',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {   
    this.setState({
        isModified: true,
        [event.target.name]: event.target.value,
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { author, title, category, body } = this.state;
    const { timestamp, id, commentCount } = this.props.post;

    const post = {
      id,
      author,
      title,
      body,
      timestamp,
      voteScore: 1,
      deleted: false,
      category,
      commentCount
    };

    this.props.editPost(id, post);
    this.props.history.push("/");
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  componentDidUpdate() {
    if(this.props.post && this.state.isMounted && !this.state.isDefaultValuesSet) {
      const { post } = this.props;
      document.getElementById("title").value = post.title;
      document.getElementById("author").value = post.author;
      document.getElementById("category").value = post.category;
      document.getElementById("body").value = post.body;
      
      this.setState({
        ...post,
        isDefaultValuesSet: true,
        isModified: false,
      });
    }
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
                Close
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
  const {posts: pList = [] } = posts;
  return {
    post: pList.filter((post) => post.id === ownProps.match.params.post_id)[0],
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (post_id, post) => dispatch(editPost(post_id, post)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));