import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {
      if (!this.props.activeBook) {
          return <div> Please select a book </div>
      }
        
      return (
        <div>{ this.props.activeBook.title }</div>
      );
  }
}

function bindStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

export default connect(bindStateToProps)(BookDetail);