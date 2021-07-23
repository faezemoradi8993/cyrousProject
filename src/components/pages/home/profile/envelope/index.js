import React from "react";
import chats from "./envelope.data";
import "./envelope.css";
import Badge from "@material-ui/core/Badge";

const index = (props) => {
  return (
    <>
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item">
          <p>{chat.text}</p>
          <Badge
            sm
            badgeContent=""
            overlap="circular"
            max="99"
            color="secondary"
          >
            <span></span>
          </Badge>
        </div>
      ))}
    </>
  );
};

export default index;
