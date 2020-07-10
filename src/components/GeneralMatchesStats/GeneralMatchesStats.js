import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MATCHES_STATS } from '../../graphql/matches/queries';
import Box from '../ui/Box';

const valueTextClass = "text-5xl leading-tight"

function GeneralMatchesStats(props) {
	const { competition } = props;
	const { data, loading } = useQuery(GET_MATCHES_STATS, {
    variables: { competition },
    fetchPolicy: 'cache-and-network',
	})

	if(loading) return null;

	const stats = data?.generalStats;
	const statsArr = [
		{ label: "Vic. Directas", value: stats?.directWins, className: 'w-1/3 pr-4' },
		{ label: "Réplicas", value: stats?.replica, className: 'w-1/3 px-4' },
		{ label: "Batallas", value: stats?.played, className: 'w-1/3 pl-4' },
	]
	return (
		<div className="mb-8 flex">
			{statsArr.map((stat, index) => (
				<div className={stat?.className} key={`match-stat-${index + 1}`}>
					<div />
					<Box className="flex">
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