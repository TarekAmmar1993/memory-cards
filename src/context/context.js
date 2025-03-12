import React, { createContext } from 'react';
import { useCards } from '../hooks/customHooks';

const JobPrepContext = createContext();

function JobPrepContextProvider({ children }) {
  const cards = useCards();

  return (
    <JobPrepContext.Provider
      value={{
        cards: cards,
      }}
    >
      {children}
    </JobPrepContext.Provider>
  );
}

export { JobPrepContextProvider, JobPrepContext };
