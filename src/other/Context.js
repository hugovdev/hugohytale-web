import React, { useState, createContext } from "react";

export const Context = createContext();

export function DataProvider(props) {
  const [lang, setLang] = useState("en");

  return (
    <Context.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
