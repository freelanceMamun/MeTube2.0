import React, { useState, createContext, useEffect } from 'react';

import { fetcDataFromApi } from '../utils/api';

export const Context = createContext();

const ApiContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selectcategories, setCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSectedCatagoryData(selectcategories);
  }, [selectcategories]);
  const fetchSectedCatagoryData = (quary) => {
    setLoading(true);

    fetcDataFromApi(`search/?q=${quary}`).then(({ contents }) => {
      setLoading(false);
      setResults(contents);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        results,
        selectcategories,
        mobileMenu,
        setLoading,
        setResults,
        setCategories,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ApiContext;
