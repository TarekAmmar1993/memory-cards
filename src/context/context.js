import React, { createContext } from "react";
import { useCards, useCategories } from "../hooks/customHooks";

const JobPrepContext = createContext();

const JobPrepContextProvider = ({ children }) => {
  const cards = useCards();
  const categories = useCategories();

  return (
    <JobPrepContext.Provider
      value={{
        cards: cards,
        categories: categories,
      }}
    >
      {children}
    </JobPrepContext.Provider>
  );
};

export { JobPrepContextProvider, JobPrepContext };
