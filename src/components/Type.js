import React, { useEffect, useState } from "react";
import { IconButton, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const Type = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <Input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter the a message..."
          type="text"
        />
        <IconButton variant="contained" color="primary" type="submit">
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default Type;
