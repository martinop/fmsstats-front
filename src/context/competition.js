import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ActiveCompetitionContext = createContext(null);

ActiveCompetitionContext.displayName = 'ActiveCompetition';

export const Provider = ({ children }) => {
	const [competition, setCompetition] = useState(null);
	
	function onChangeCompetition(id) {
		setCompetition(id);
	}

  return (
    <ActiveCompetitionContext.Provider value={{ competition, onChangeCompetition }}>
      {children}
    </ActiveCompetitionContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node
};

export default ActiveCompetitionContext;
