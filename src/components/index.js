import React from 'react';
import FreestylersTable from './FreestylersTable';
import GeneralMatches from './GeneralMatchesStats';
import WordsList from './WordsList';
import JudgesEffectiveness from './JudgesEffectiveness';

function App() {
  return (
    <div>
      <div className="p-12 flex justify-between items-start">
        <div className="w-3/5">
          <GeneralMatches />
          <FreestylersTable />
        </div>
        <div className="w-2/5 ml-8">
          <WordsList />
          <JudgesEffectiveness />
        </div>
      </div>

    </div>
  );
}

export default App;
