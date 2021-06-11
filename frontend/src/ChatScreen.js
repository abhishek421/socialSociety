import { Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";

function Sent({ text }) {
  return (
    <h6
      style={{
        textAlign: "right",
        backgroundColor: "#3f51b5",
        color: "#fff",
        padding: "1em 2em",
        alignSelf: "flex-end",
        borderRadius: "25px 25px 2px 25px",
      }}
    >
      {text}
    </h6>
  );
}

function Recieved({ text }) {
  return (
    <h6
      style={{
        textAlign: "left",
        backgroundColor: "#d9d9d9",
        padding: "1em 2em",
        borderRadius: "25px 25px 25px 2px",
      }}
    >
      {text}
    </h6>
  );
}

function ChatScreen({ setFlag, setHeader }) {
  let { chatId } = useParams();
  let { path, url } = useRouteMatch();

  useEffect(() => {
    setFlag(url);
    setHeader(chatId);
  });

  return (
    <div className="chatScreenMain">
      <div
        style={{ height: "68vh" }}
        className="d-flex flex-column align-items-start w-100 p-2"
      >
        <Recieved text="Hey" />
        <Recieved text="How are you" />
        <Sent text="Hello there!" />
        <Sent text="Am fine, wbu?" />
        <Recieved text="bas bas formality bht hui 😂😂" />
      </div>
      <div
        style={{
          padding: "0.2em 0.5em",
          height: "9vh",
        }}
        className="d-flex flex-row justify-content-between align-items-center w-100"
      >
        <input
          className="msgInput"
          type="text"
          placeholder="Enter your msg.."
        ></input>
        <div
          style={{
            borderRadius: "25px",
            backgroundColor: "#3f51b5",
            padding: "0.5em",
            margin: "0.2em",
          }}
        >
          <Send htmlColor="#fff" />
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
