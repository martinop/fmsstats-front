import keyBy from 'lodash/keyBy';

export function participantsReducer(state, action) {
	switch(action.type) {
		case 'FETCH_SUCCESS': {
			return keyBy(action.payload.participants, 'id');
		}
		default: return {}
	}
}