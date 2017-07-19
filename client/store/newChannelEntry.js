// ACTION TYPE
const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME';

// ACTION CREATOR
export function writeChannelName (channelName) {
  const action = { type: WRITE_CHANNEL_NAME, channelName };
  return action;
};

// REDUCER
export default function channelEntryReducer(state='', action){
	switch(action.type){
		case WRITE_CHANNEL_NAME:
			return action.channelName;
		default:
			return state;
	};
};