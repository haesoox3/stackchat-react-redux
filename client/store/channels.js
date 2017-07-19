import axios from 'axios';

// ACTION TYPES
const GET_CHANNELS = 'GET_CHANNELS';
const GET_CHANNEL = 'GET_CHANNEL';

// ACTION CREATORS
export function getChannels (channels) {
  const action =  {type: GET_CHANNELS, channels: channels};
  return action;
}
export function getChannel (channel) {
  const action = { type: GET_CHANNEL, channel };
  return action;
}

// THUNK MIDDLEWARE
export function fetchChannels () {
  return function (dispatch) {
    axios.get('/api/channels')
    .then(res => res.data)
    .then(channels => dispatch(getChannels(channels)));
  }
}

export function postChannel (channel, history) {
  return function thunk (dispatch) {
    return axios.post('/api/channels', channel)
    .then(res => res.data)
    .then(newChannel => {
      dispatch(getChannel(newChannel));
      socket.emit('new-channel', newChannel);
      history.push(`/channels/${newChannel.id}`);
    });
  };
}

// REDUCER

export default function channelsReducer(state=[], action){
	switch(action.type){
		case GET_CHANNELS:
			return action.channels;
		case GET_CHANNEL:
			return [...state, action.channel];
		default:
			return state;
	};
};