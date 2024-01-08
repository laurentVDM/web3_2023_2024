import React, { useState } from 'react';

const Context = React.createContext(null)

const ProviderWrapper = ({ children }) => {

  const [jokes, setJokes] = useState([]);
  const [scores, setScores] = useState([]);

  const updateJokes = (newJokes) => {
    setJokes(newJokes);
  };

  const updateScores = (newScores) => {
    setScores(newScores);
  };

  const contextValue = {
    jokes,
    scores,
    updateJokes,
    updateScores,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export { Context, ProviderWrapper };
