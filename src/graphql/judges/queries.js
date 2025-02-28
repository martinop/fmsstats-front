import gql from 'graphql-tag';

export const GET_JUDGES = gql`
	query getJudgesEffectiveness($id: ID!) {
		competition(id: $id) {
			stats {
				mostEffectiveJudges {
					id
					effectiveness
					judge {
						id
						name
						imageUrl
					}
				}
			}
		}
	}
`;

export const GET_GLOBAL_JUDGES = gql`
	query getGlobalJudgesEffectiveness {
		globalStats{
			mostEffectiveJudges {
				id
				effectiveness
				judge {
					id
					name
					imageUrl
				}
			}
		}
	}
`;

export const GET_GLOBAL_VOTING_JUDGE = gql`
	query getGlobalVoting {
		globalStats{
			mostVotingJudge {
				avg
				judge {
					id
					name
					imageUrl
				}
			}
			lessVotingJudge {
				avg
				judge {
					id
					name
					imageUrl
				}
			}
		}
	}
`

export const GET_VOTING_JUDGE = gql`
	query getVoting($id: ID!) {
		competition(id: $id) {
			stats {
				mostVotingJudge {
					avg
					judge {
						id
						name
						imageUrl
					}
				}
				lessVotingJudge {
					avg
					judge {
						id
						name
						imageUrl
					}
				}
			}
		}
	}
`

