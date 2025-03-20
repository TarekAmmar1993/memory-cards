import Header from './components/Header';
import Cards from './components/Cards';
import { JobPrepContextProvider } from './context/context';
import React from 'react';

const App = () => {
  return (
    <JobPrepContextProvider>
      <div className="app">
        <Header />
        <Cards />
      </div>
    </JobPrepContextProvider>
  );
};

export default App;
