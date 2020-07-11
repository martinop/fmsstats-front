import gql from 'graphql-tag';

export const GET_COMPETITIONS = gql`
	query getCompetitionss {
		competitions {
			id
			name
			imageUrl
		}
	}
`;
