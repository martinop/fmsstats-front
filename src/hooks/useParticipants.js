import { useEffect, useReducer } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_PARTICIPANTS } from '../graphql/participants/queries';
import { participantsReducer } from '../reducers/participants';

function useParticipants() {
	const client  = useApolloClient()
  const [participants, dispatch] = useReducer(participantsReducer, {});

	useEffect(() => {
		async function fetch() {
			const { data } = await client.query({ query: GET_PARTICIPANTS, fetchPolicy: 'cache-first' });
			dispatch({ type: "FETCH_SUCCESS", payload: data });
		}
		if(participants.length === 0) {	
			fetch();
		}
	}, [client, participants]);
}

export default useParticipants;