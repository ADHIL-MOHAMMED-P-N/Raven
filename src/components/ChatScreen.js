import React from "react";
import Display from "./Display";
import Type from "./Type";
import { TypeProvider } from "./TypeContext";

const ChatScreen = () => {
  return (
    <div className="chatscreen">
      <TypeProvider>
        <Display />
        <Type />
      </TypeProvider>
    </div>
  );
};

export default ChatScreen;
