import React, { useContext } from "react";
import { TypeContext } from "./TypeContext";

const Display = () => {
  const [text] = useContext(TypeContext);
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Display;
