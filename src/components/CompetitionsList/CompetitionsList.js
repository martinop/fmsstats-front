import React, { useContext } from 'react';
import cx from 'classnames';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMPETITIONS } from '../../graphql/competitions/queries'
import ActiveCompetitionContext from '../../context/competition';

function CompetitionsList() {
	const { competition: activeCompetition, onChangeCompetition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(GET_COMPETITIONS, {
    fetchPolicy: 'cache-and-network',
	})
	const competitions = data?.competitions || [];
	if(loading) return null;
	return (
		<div className="flex mb-8"> 
			{competitions.map((competition, index) => {
				const isActive = activeCompetition === competition.id;
				return (
					<div className={cx("p-2 hover:bg-gray-600", isActive ? 'bg-gray-600' : 'bg-gray-800', { 'border-l border-gray-900': index > 0 })}>
						<img
							src={competition?.imageUrl}
							alt={competition?.name}
							className="w-12 h-12 object-center"
							onClick={() => onChangeCompetition(isActive ? null : competition.id)}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default CompetitionsList;