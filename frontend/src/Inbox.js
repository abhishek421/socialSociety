import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddBoxOutlined, ArrowBack, ChatBubble } from "@material-ui/icons";
import { userData } from "./userData";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ChatScreen from "./ChatScreen";
import { useEffect, useState } from "react";

function Inbox() {
  let { path, url } = useRouteMatch();
  const [flag, setFlag] = useState("/chats");
  const [header, setHeader] = useState("Chats");

  return (
    <div>
      <AppBar
        className="mb-2"
        position="fixed"
        style={{ top: "0", zIndex: "1000" }}
      >
        <Toolbar className="d-flex flex-row align-items-center justify-content-between px-2 container-md">
          <Typography edge="start" variant="h6">
            {header}
          </Typography>
          {flag === "/chats" ? (
            <IconButton color="inherit">
              <AddBoxOutlined />
            </IconButton>
          ) : (
            <Link
              to="/chats"
              onClick={() => {
                setHeader("Chats");
                setFlag("/chats");
              }}
            >
              <IconButton color="inherit">
                <ArrowBack />
              </IconButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <div className="d-flex flex-row py-5" style={{ height: "100vh" }}>
        <div className={`chatList ${flag === "/chats" ? "" : "dis-none"}`}>
          <List>
            {userData.map((item) => (
              <Link to={`${url}/${item.userName}`}>
                <ListItem divider button>
                  <ListItemIcon>
                    <Avatar
                      style={{
                        height: "2.6em",
                        width: "2.6em",
                        marginRight: "1em",
                      }}
                      alt={item.userName}
                      src={item.user}
                    />
                  </ListItemIcon>
                  <div className="">
                    <Typography variant="h6">{item.userName}</Typography>
                    <Typography variant="body2">{item.msg}</Typography>
                  </div>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>

        <div className={`chatScreen ${flag === "/chats" ? "dis-none" : ""}`}>
          <Switch>
            <Route exact path={path}>
              <Typography edge="start" variant="h4">
                <ChatBubble fontSize="large" /> Select a chat to start
              </Typography>
            </Route>
            <Route path={`${path}/:chatId`}>
              <ChatScreen setHeader={setHeader} setFlag={setFlag} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
