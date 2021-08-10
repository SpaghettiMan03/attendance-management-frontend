import React from 'react';
import './App.css';
import GrpcButton from './gRPCButton';
import { gRPCClients } from './gRPCClients';

const App: React.FC = () => {
  return (
    <div>
      <GrpcButton clients={gRPCClients} />
    </div>
  );
};

export default App;
