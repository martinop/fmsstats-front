import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Table from '../ui/Table';
import { GET_POSITIONS_TABLE, GET_GLOBAL_POSITIONS_TABLE } from '../../graphql/positions/queries';
import ActiveCompetitionContext from '../../context/competition';

function getColumns(hasCompetitionActive) {
	return [
		{
			Header: 'Freestyler',
			accessor: 'participant',
			Cell: ({ row: { original } }) => (
				<div className="flex items-center">
					<img
						className="h-12 w-12 mr-4 object-cover rounded-full"
						src={original?.participant?.imageUrl}
						alt={original?.participant?.name}
					/>
					{!hasCompetitionActive && (
						<img
							className="h-6 w-6 mr-4 rounded-full object-cover"
							src={original?.competition?.imageUrl}
							alt={original?.competition?.name}
						/>
					)}
					{original?.participant?.name}
				</div>
			)
		},
		{
			Header: 'VIC.',
			accessor: 'wins',
			Cell: ({ value }) => <span className="text-green-400">{value}</span>
		},
		{
			Header: 'DER.',
			accessor: 'loses',
			Cell: ({ value }) => <span className="text-red-400">{value}</span>
		},
		{ Header: 'VIC./REPLICA', accessor: 'winsReplica' },
		{ Header: 'DER./REPLICA	', accessor: 'losesReplica' },
		{
			Header: 'PTB',
			accessor: 'ptb',
			Cell: ({ value }) => <span className="text-2xl">{value}</span>
		},
		{
			Header: 'PTS.',
			accessor: 'points',
			Cell: ({ value }) => <span className="text-yellow-300 text-3xl">{value}</span>
		},
	];
}
function FreestylersTable() {
	const { competition } = useContext(ActiveCompetitionContext);
	const { data, loading } = useQuery(competition ? GET_POSITIONS_TABLE : GET_GLOBAL_POSITIONS_TABLE, {
		fetchPolicy: 'cache-and-network',
		...competition && { variables: { competition },	}
	})
	const positions = competition ? data?.positions : data?.positions || [];
	if(loading) {
		return (
			<div className="font-bold text-white">
				Loading...
			</div>
		)
	}

	const columns = getColumns(!!competition)
	
	return (
		<Table data={positions} columns={columns} pr/>
	)
}

FreestylersTable.propTypes = {
	competition: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
}

export default FreestylersTable;