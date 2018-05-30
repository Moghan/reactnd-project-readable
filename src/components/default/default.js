import React from 'react';
import { connect } from 'react-redux';
import PostList from '../PostList';


export class Default extends React.Component {  
  render () {
    return (
      <div>
        <PostList />        
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
  }
}

export default connect(mapStateToProps)(Default);