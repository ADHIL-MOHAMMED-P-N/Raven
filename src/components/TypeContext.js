import React, { createContext, useState } from "react";

export const TypeContext = createContext();

export const TypeProvider = (props) => {
  const [text, setText] = useState("");
  return (
    <TypeContext.Provider value={[text, setText]}>
      {props.children}
    </TypeContext.Provider>
  );
};
