import React from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';

const CommentContainer = styled.div`
  margin: 5px 0;
`
const Header = styled.div`
  display: flex;
  font-size: small;
  margin-bottom: 3px;
`;
const BtnEdit = styled.button`
  font-size: 0.5rem;
  padding: 0 4px;
  margin-left: 10px;
`
const BtnSubmit = styled.button`
  font-size: 0.5rem;
  padding: 0 4px;
  margin-left: 10px;
`
const BtnDelete = styled.button`
  padding: 0 4px;
  font-size: 0.5rem;
`
const BtnCancel = styled.button`
  padding: 0 4px;
  font-size: 0.5rem;
`
const Body = styled.div`;`
const Text = styled.div``
const Author = styled.div`
  margin-right: 5px;
  font-weight: bold;
`
const Date = styled.div`
  margin: 0 5px;
`

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      body: ''
    }

    this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
    this.handleOnClickCancel = this.handleOnClickCancel.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      body: event.target.value
    });
  }

  handleOnClickSubmit() {
    const comment = {
      ...this.props.comment,
      body: this.state.body
    }
    console.log("new edit body ", this.state.body);
    this.props.handleSubmit(comment);
  }

  handleOnClickCancel() {
    this.props.handleCancel();
  }

  render() {
    console.log(this.state.body);
    const {
      body,
      timestamp,
      author
    } = this.props.comment;
    const { editMode } = this.state;

    return (
      <CommentContainer>
        <Header>
          <Author>EDIT VERSION</Author>
          commented
          <Date>
            <Timestamp time={timestamp} format='date' />
          </Date>
          <BtnSubmit onClick={this.handleOnClickSubmit}>Submit</BtnSubmit>
          <BtnCancel onClick={this.handleOnClickCancel}>Cancel</BtnCancel>
        </Header>
        <Body>
          <input type='text' name='body' defaultValue={body} onChange={this.handleOnChange}/>
        </Body>
      </CommentContainer>
    )
  }
}