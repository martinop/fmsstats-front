import gql from 'graphql-tag';

export const GET_MATCHES_STATS = gql`
	query getGeneralStats($id: ID!) {
		competition(id: $id) {
			stats {
				replicas
				directWins
				played
			}
		}
	}
`;


export const GET_GLOBAL_MATCHES_STATS = gql`
	query getGlobalGeneralStats {
		globalStats {
			replicas 
			directWins
			played 
		}
	}
`

export const GET_GLOBAL_MOST_MATCHES_STATS = gql`
	query getGlobalMostMatchesStats {
		globalStats {
			mostPointsMatch {
				homePoints
				awayPoints
				home {
					id
					name
					imageUrl
				}
				away {
					id
					name
					imageUrl
				}
			}
			mostEvenMatch {
				homePoints
				awayPoints
				home{
					id
					name
					imageUrl
				}
				away {
					id
					name
					imageUrl
				}
			}
			mostUnevenMatch {
				homePoints
				awayPoints 
				home {
					id
					name
					imageUrl
				}
				away {
					id
					name
					imageUrl
				}
			}
		}
	}

`
export const GET_MOST_MATCHES_STATS = gql`
	query getMostMatchessStats($id: ID!) {
		competition(id: $id) {
			stats {
				mostPointsMatch {
					homePoints
					awayPoints
					home {
						id
						name
						imageUrl
					}
					away {
						id
						name
						imageUrl
					}
				}
				mostEvenMatch {
					homePoints
					awayPoints
					home{
						id
						name
						imageUrl
					}
					away {
						id
						name
						imageUrl
					}
				}
				mostUnevenMatch {
					homePoints
					awayPoints 
					home {
						id
						name
						imageUrl
					}
					away {
						id
						name
						imageUrl
					}
				}
			}
		}
	}
`