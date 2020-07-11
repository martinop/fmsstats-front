import gql from 'graphql-tag';

export const GET_GLOBAL_WORDS = gql`
	query getGlobalWords {
		globalStats {
			mostUsedWords {
				id
				mode
				value
				count
			}
		}
	}
`;

export const GET_WORDS = gql`
	query getWords($id: ID!) {
		competition(id: $id) {
			stats {
				mostUsedWords {
					id
					mode
					value
					count
				}
			}
		}
	}
`