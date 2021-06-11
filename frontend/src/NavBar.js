import { AppBar, IconButton, Toolbar, Badge } from "@material-ui/core";
import { ChatBubble, MenuRounded } from "@material-ui/icons";
import { useHistory } from "react-router";
import logo from "./Assets/logo.png";

function NavBar() {
  const history = useHistory();
  return (
    <AppBar position="fixed" style={{ top: "0", zIndex: "1000" }}>
      <Toolbar className="d-flex flex-row align-items-center justify-content-between px-2 container-md">
        <img src={logo} height="44" />
        <IconButton color="inherit" onClick={() => history.push("/chats")}>
          <Badge badgeContent={4} color="secondary">
            <ChatBubble />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
