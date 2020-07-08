import React from 'react';
import Box from './ui/Box';
import FreestylersTable from './FreestylersTable';

// const columns = [
//   { Header: 'Nombre', accessor: 'name' },
//   { Header: 'V', accessor: 'wins' },
//   { Header: 'D', accessor: 'loses' },
//   { Header: 'VR', accessor: 'winsReplica' },
//   { Header: 'DR', accessor: 'losesReplica' },
//   { Header: 'PTB', accessor: 'ptb' },
//   { Header: 'Puntos', accessor: 'points' },
// ];

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
        <Box className="w-3/5">
          <h4 className="mb-4">Freestylers</h4>
          <FreestylersTable />
        </Box>
        <Box className="w-2/5 ml-8">
          <h4>Hi</h4>
        </Box>
      </div>

    </div>
  );
}

export default App;
