import gql from 'graphql-tag';

export const GET_POSITIONS_TABLE = gql`
query getPositions($competition: Int!) {
	positions(competition: $competition) {
		data {
			id
			ptb
			wins,
			loses,
			points
			winsReplica
			losesReplica
			participant {
				id
				name
				imageUrl
			}
			competition {
				id
				name
			}
		}
	}
}
`;


export const GET_GLOBAL_POSITIONS_TABLE = gql`
	query getGlobalPositions{
		positions(competition: $competition) {
			id
			ptb
			wins,
			loses,
			points
			winsReplica
			losesReplica
			participant {
				id
				name
				imageUrl
			}
			competition {
				id
				name
			}
		}
	}
`;
