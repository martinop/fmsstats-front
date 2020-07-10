import React from 'react';
import Box from './ui/Box';
import FreestylersTable from './FreestylersTable';
import GeneralMatches from './GeneralMatchesStats';

// const data = [
//   {name: "Chuty", wins: 10, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 9, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 8, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 7, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 6, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 5, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 4, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
//   {name: "Chuty", wins: 3, loses: 0, winsReplica: 0, losesReplica: 0, points: 0, ptb: 0 },
// ];

function App() {
  return (
    <div>
      <div className="p-12 flex justify-between items-start">
        <div className="w-3/5">
          <GeneralMatches />
          <FreestylersTable />
        </div>
        <Box className="w-2/5 ml-8">
          <h4>Hi</h4>
        </Box>
      </div>

    </div>
  );
}

export default App;
