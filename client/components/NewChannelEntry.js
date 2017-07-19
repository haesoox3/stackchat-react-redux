import React, { Component } from 'react';
import {connect} from 'react-redux';
import {writeChannelName, postChannel} from '../store';

export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" value={props.newChannelEntry} onChange={props.handleChange}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

function mapStateToProps(state, ownProps){
  return {
    newChannelEntry: state.newChannelEntry
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChange (evt) {
      dispatch(writeChannelName(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const channelName = evt.target.channelName.value;
      dispatch(postChannel({ name: channelName }, ownProps.history));
      dispatch(writeChannelName(''));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container; 
