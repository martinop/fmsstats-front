import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Table from '../ui/Table';
import { GET_POSITIONS_TABLE, GET_GLOBAL_POSITIONS_TABLE } from '../../graphql/positions/queries';
import ActiveCompetitionContext from '../../context/competition';


const columns = [
  { Header: 'Freestyler', accessor: 'participant.name' },
  { Header: 'VIC.', accessor: 'wins' },
  { Header: 'DER.', accessor: 'loses' },
  { Header: 'VIC./REPLICA', accessor: 'winsReplica' },
	{ Header: 'DER./REPLICA	', accessor: 'losesReplica' },
	{ Header: 'PTB', accessor: 'ptb' },
	{ Header: 'PTS.', accessor: 'points' },
];
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
	return (
		<Table data={positions} columns={columns} />
	)
}

FreestylersTable.propTypes = {
	competition: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
}

export default FreestylersTable;