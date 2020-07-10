import gql from 'graphql-tag';

export const GET_WORDS = gql`
	query getWords($competition: Int) {
		words(competition: $competition) {
			id
			mode
			value
			count
		}
	}
`;