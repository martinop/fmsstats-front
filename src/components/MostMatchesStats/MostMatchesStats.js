import React, { useContext } from 'react';
import ActiveCompetitionContext from '../../context/competition';
import { useQuery } from '@apollo/react-hooks';
import { GET_GLOBAL_MOST_MATCHES_STATS, GET_MOST_MATCHES_STATS } from '../../graphql/matches/queries';
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
					className="rounded-full w-12 h-12 object-cover"
				/>
				<div className="ml-2">
					<h4>{home?.name}</h4>
					<h2 className={pointsClass}>{homePoints}</h2>
				</div>
			</div>
			<h1 className="my-auto mx-6 text-3xl">VS</h1>
			<div className="flex">
				<img
					src={away?.imageUrl}
					alt={away?.name}
					className="rounded-full w-12 h-12 object-cover"
				/>
				<div className="ml-2">
					<h4>{away?.name}</h4>
					<h2 className={pointsClass}>{awayPoints}</h2>
				</div>
			</div>
		</div>
	)
}

function MostMatchesStats() {
	const { competition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(competition ? GET_MOST_MATCHES_STATS : GET_GLOBAL_MOST_MATCHES_STATS, {
		...competition && { variables: { id: competition }},
    fetchPolicy: 'cache-and-network',
	})
	if(loading) return null;

	const stats = competition ? data?.competition?.stats : data?.globalStats;
	return (
		<div>
			{stats?.mostPointsMatch && (
				<Box borderer>
					<h2 className="text-2xl">Batalla más puntuada</h2>
					<VersusRow {...stats?.mostPointsMatch || {}} />
				</Box>
			)}
			{stats?.mostEvenMatch && (
				<Box className="mt-8" borderer>
					<h2 className="text-2xl">Batalla más pareja</h2>
					<VersusRow {...stats?.mostEvenMatch || {}} />
				</Box>
			)}
			{stats?.mostUnevenMatch && (
				<Box className="mt-8" borderer>
					<h2 className="text-2xl">Batalla más dispareja</h2>
					<VersusRow {...stats?.mostUnevenMatch || {}} />
				</Box>
			)}
		</div>
	)
}

export default MostMatchesStats;