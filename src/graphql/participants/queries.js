import gql from 'graphql-tag';

export const GET_PARTICIPANTS = gql`
	query getParticipants {
		participants {
			id
			type
			name
			imageUrl
		}
	}
`;
