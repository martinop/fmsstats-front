import React from 'react';
import FreestylersTable from './FreestylersTable';
import GeneralMatches from './GeneralMatchesStats';
import WordsList from './WordsList';
import JudgesEffectiveness from './JudgesEffectiveness';
// import CompetitionList from './CompetitionsList';
import { Provider } from '../context/competition';
import MostMatchesStats from './MostMatchesStats';
import MostLessVotingJudge from './MostLessVotingJudge/MostLessVotingJudge';

function App() {
  // return (
  //   <div className="h-36 w-full flex items-center justify-center pt-12 flex-col text-white">
  //     <h2 className="text-4xl leading-none">Keep Watching</h2>
  //     <a className="text-2xl text-blue-300 underline hover:no-underline" href='https://twitter.com/fmsstatsof'>
  //       @fmsstatsof
  //     </a>
  //   </div>
  // )
  return (
    <Provider>
      <div>
        <div className="p-12 flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full sm:w-8/5">
            {/* <CompetitionList /> */}
            <GeneralMatches />
            <div className="flex">
              <div className="w-2/3 pr-4">
                <FreestylersTable />
              </div>
              <div className="w-1/3 pl-4">
                <MostLessVotingJudge />
                <JudgesEffectiveness />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-4/12 mt-8 md:ml-8 md:mt-0">
            <MostMatchesStats />
            <WordsList />
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
