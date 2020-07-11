import React, { useContext } from 'react';
import ActiveCompetitionContext from '../../context/competition';
import { useQuery } from '@apollo/react-hooks';
import { GET_GLOBAL_MOST_MATCHES_STATS } from '../../graphql/matches/queries';
import Box from '../ui/Box';

const pointsClass = "text-indigo-600 leading-none text-3xl font-bold";


function VersusRow(props) {
	const { home, away, homePoints, awayPoints } = props;
	return (
		<div className="flex mt-4">
			<div className="flex">
				<img
					src={home?.imageUrl}
					alt={home?.name}
					className="rounded-full w-16 h-16 object-cover"
				/>
				<div className="ml-4">
					<h4>{home?.name}</h4>
					<h2 className={pointsClass}>{homePoints}</h2>
				</div>
			</div>
			<h1 className="my-auto mx-4 text-3xl">VS</h1>
			<div className="flex">
				<img
					src={away?.imageUrl}
					alt={away?.name}
					className="rounded-full w-16 h-16 object-cover"
				/>
				<div className="ml-4">
					<h4>{away?.name}</h4>
					<h2 className={pointsClass}>{awayPoints}</h2>
				</div>
			</div>
		</div>
	)
}

function MostMatchesStats() {
	const { competition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(GET_GLOBAL_MOST_MATCHES_STATS, {
		...competition && { variables: { id: competition }},
    fetchPolicy: 'cache-and-network',
	})
	if(loading) return null;

	const stats = data?.globalStats;
	return (
		<div>
			{stats.mostPointsMatch && (
				<Box className="mt-4">
					<h2>Batalla más puntuada</h2>
					<VersusRow {...stats?.mostPointsMatch || {}} />
				</Box>
			)}
			{stats.mostEvenMatch && (
				<Box className="mt-4">
					<h2>Batalla más pareja</h2>
					<VersusRow {...stats?.mostEvenMatch || {}} />
				</Box>
			)}
			{stats.mostUnevenMatch && (
				<Box className="mt-4">
					<h2>Batalla más dispareja</h2>
					<VersusRow {...stats?.mostUnevenMatch || {}} />
				</Box>
			)}
		</div>
	)
}

export default MostMatchesStats;