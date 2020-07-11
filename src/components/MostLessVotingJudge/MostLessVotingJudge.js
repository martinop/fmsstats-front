import React, { useContext } from 'react';
import ActiveCompetitionContext from '../../context/competition';
import { useQuery } from '@apollo/react-hooks';
import { GET_VOTING_JUDGE, GET_GLOBAL_VOTING_JUDGE } from '../../graphql/judges/queries';
import Box from '../ui/Box';

const pointsClass = "text-indigo-600 leading-none text-3xl font-bold";

function MostLessVotingJudge() {
	const { competition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(competition ? GET_VOTING_JUDGE : GET_GLOBAL_VOTING_JUDGE, {
		...competition && { variables: { id: competition }},
    fetchPolicy: 'cache-and-network',
	})

	if(loading) return null;

	const judgesStats = competition ? data?.competition?.stats : data?.globalStats;
	console.log(data)
	return (
		<div className="flex flex-col">
			<Box borderer className="mb-8">
				<h2 className="text-2xl">Juez que más puntua</h2>
				{judgesStats?.mostVotingJudge && (
					<div className="flex mt-4">
						<img
							src={judgesStats?.mostVotingJudge?.judge?.imageUrl}
							alt={judgesStats?.mostVotingJudge?.judge?.name}
							className="rounded-full w-12 h-12 object-cover"
						/>
						<div className="ml-2">
							<h4>{judgesStats?.mostVotingJudge?.judge?.name}</h4>
							<h2 className={pointsClass}>{judgesStats?.mostVotingJudge?.avg}</h2>
						</div>
					</div>
				)}
			</Box>
			<Box borderer>
				<h2 className="text-2xl">Juez que menos puntua</h2>
				{judgesStats?.lessVotingJudge && (
					<div className="flex mt-4">
						<img
							src={judgesStats?.lessVotingJudge?.judge?.imageUrl}
							alt={judgesStats?.lessVotingJudge?.judge?.name}
							className="rounded-full w-12 h-12 object-cover"
						/>
						<div className="ml-2">
							<h4>{judgesStats?.lessVotingJudge?.judge?.name}</h4>
							<h2 className={pointsClass}>{judgesStats?.lessVotingJudge?.avg}</h2>
						</div>
					</div>
				)}
			</Box>
		</div>
	)

}

export default MostLessVotingJudge;