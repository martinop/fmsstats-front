import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MATCHES_STATS, GET_GLOBAL_MATCHES_STATS } from '../../graphql/matches/queries';
import Box from '../ui/Box';
import ActiveCompetitionContext from '../../context/competition';

const valueTextClass = "text-5xl leading-tight"

function GeneralMatchesStats() {
	const { competition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(competition ? GET_MATCHES_STATS : GET_GLOBAL_MATCHES_STATS, {
		fetchPolicy: 'cache-and-network',
		...competition && { variables: { id: competition }},
	})
	
	if(loading) return null;

	const stats = competition ? data?.competition?.stats : data?.globalStats
	const statsArr = [
		{ label: "Vic. Directas", value: stats?.directWins, className: 'w-1/3 pr-4' },
		{ label: "Réplicas", value: stats?.replicas, className: 'w-1/3 px-4' },
		{ label: "Batallas", value: stats?.played, className: 'w-1/3 pl-4' },
	]
	return (
		<div className="mb-8 flex">
			{statsArr.map((stat, index) => (
				<div className={stat?.className} key={`match-stat-${index + 1}`}>
					<div />
					<Box className="flex" borderer>
						<div>
							<h3>{stat?.label}</h3>
							<h1 className={valueTextClass}>{stat?.value}</h1>
						</div>
					</Box>
				</div>
			))}
		</div>

	)
}

export default GeneralMatchesStats;