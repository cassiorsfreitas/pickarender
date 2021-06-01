/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

const ResultsContext = createContext();

function ResultsProvider({ children }) {
  const [ssg, updateSsg] = useState(0);
  const [spa, updateSpa] = useState(0);
  const [ssr, updateSsr] = useState(0);

  function resetRenders() {
    updateSsg(0);
    updateSpa(0);
    updateSsr(0);
  }

  function updatingResult(data) {
    if (data === 'SSG') {
      updateSsg((prevState) => prevState + 1);
    }
    if (data === 'SPA') {
      updateSpa((prevState) => prevState + 1);
    }
    if (data === 'SSR') {
      updateSsr((prevState) => prevState + 1);
    }
  }

  return (
    <ResultsContext.Provider value={{ updatingResult, ssg, spa, ssr, resetRenders }}>
      {children}
    </ResultsContext.Provider>
  );
}

export { ResultsContext, ResultsProvider };
