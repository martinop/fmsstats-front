import React from 'react';
import FreestylersTable from './FreestylersTable';
import GeneralMatches from './GeneralMatchesStats';
import WordsList from './WordsList';
import JudgesEffectiveness from './JudgesEffectiveness';
import CompetitionList from './CompetitionsList';
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
      <div className="bg-gray-900 pl-12 flex items-center h-16 w-full shadow-md">
        <img src="/logo.png" className="h-12"  alt="logo" />
      </div>
      <div className="min-h-screen">
        <div className="p-6 lg:p-12 flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-9/12">
            <CompetitionList />
            <GeneralMatches />
            <div className="flex flex-wrap">
              <div className="w-full lg:w-2/3 lg:pr-4 overflow-auto">
                <FreestylersTable />
              </div>
              <div className="w-full lg:w-1/3 lg:pl-4">
                <MostLessVotingJudge />
                <JudgesEffectiveness />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 mt-8 lg:ml-8 lg:mt-0">
            <MostMatchesStats />
            <WordsList />
          </div>
        </div>
      </div>
      <footer className="footer flex w-full items-center h-10 bg-black mt-8 justify-between px-12"> 
        <a href="https://twitter.com/fmsstatsof" className="h-12">
          <svg className="h-full p-2" viewBox="0 0 24 24"><g><path fill="white" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </a>
        <h2 className="text-white">Desarrollado por Gabriel | Martin </h2>
      </footer> 
    </Provider>

  );
}

export default App;
