import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { GET_POSITIONS_TABLE } from '../../graphql/positions/queries';

function FreestylersTable(props) {
	const { competition } = props;
	const { data, error, loading } = useQuery(GET_POSITIONS_TABLE, {
    variables: { competition },
    fetchPolicy: 'cache-and-network',
	})

	console.log({ data, error, loading })

	if(loading) {
		return (
			<div className="font-bold">
				Loading...
			</div>
		)
	}
	return null;
}

FreestylersTable.propTypes = {
	competition: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
}

export default FreestylersTable;