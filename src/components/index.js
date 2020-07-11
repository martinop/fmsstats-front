import React from 'react';
import FreestylersTable from './FreestylersTable';
import GeneralMatches from './GeneralMatchesStats';
import WordsList from './WordsList';
import JudgesEffectiveness from './JudgesEffectiveness';
import CompetitionList from './CompetitionsList';
import { Provider } from '../context/competition';
import MostMatchesStats from './MostMatchesStats';

function App() {
  return (
    <Provider>
      <div>
        <div className="p-12 flex justify-between items-start">
          <div className="w-3/5">
            <CompetitionList />
            <GeneralMatches />
            <FreestylersTable />
          </div>
          <div className="w-2/5 ml-8">
            <MostMatchesStats />
            <WordsList />
            <JudgesEffectiveness />
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
