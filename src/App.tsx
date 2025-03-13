import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { JobPrepContextProvider } from './context/context';
import React from 'react';

function App() {
  return (
    <JobPrepContextProvider>
      <React.StrictMode>
        <div className="app">
          <Header />
          <Cards />
        </div>
      </React.StrictMode>
    </JobPrepContextProvider>
  );
}

export default App;
