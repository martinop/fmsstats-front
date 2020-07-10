import gql from 'graphql-tag';

export const GET_MATCHES_STATS = gql`
	query getGeneralStats($competition: Int) {
		generalStats(competition: $competition) {
			played
			replica
			directWins
		}
	}
`;
