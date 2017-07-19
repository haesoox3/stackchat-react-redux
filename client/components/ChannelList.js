import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

function ChannelList (props) {
  console.log('PROPS>CHANNELS', props)
  console.log('channellist props channels', props.channels);
  return (
    <ul>
        {props.channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{props.messages.filter(message => message.channelId === channel.id).length}</span>
              </NavLink>
             </li>
          )
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

function mapStateToProps(state){
  return {
    channels: state.channels,
    messages: state.messages
  };
}

const ChannelListContainer = withRouter(connect(mapStateToProps)(ChannelList));
export default ChannelListContainer;