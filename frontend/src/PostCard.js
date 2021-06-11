import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  ButtonGroup,
  Divider,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Snackbar,
} from "@material-ui/core";
import { ChatBubble, Favorite, MoreVert, Share } from "@material-ui/icons";
import { useState } from "react";
import { Alert } from "@material-ui/lab";

export default function PostCard(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSnack = () => {
    setOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={2} className="d-flex flex-column p-2 mx-2 my-2 postCard">
      <div className="d-flex flex-column mb-2">
        <div className="d-flex flex-row gap-2 justify-content-start w-100 align-items-center">
          <Avatar src={props.user} alt={props.userName} />
          <div className="flex-grow-1">
            <Typography variant="button" component="p">
              {props.userName}
            </Typography>
            <Typography variant="caption" component="p" color="textSecondary">
              @username
            </Typography>
          </div>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginTop: "2.4em" }}
          >
            <MenuItem onClick={handleClose}>Copy Link</MenuItem>
            <MenuItem onClick={handleClose}>Unfollow</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </div>
      </div>
      <div>
        <Paper
          elevation={0}
          component="img"
          className="postImg"
          src={props.img}
        />
      </div>
      <ButtonGroup className="mt-2" color="default">
        <IconButton
          onClick={() => {
            like ? setLike(false) : setLike(true);
          }}
        >
          <Favorite color={like ? "primary" : ""} />
        </IconButton>
        <IconButton>
          <ChatBubble />
        </IconButton>
        <IconButton onClick={handleSnack}>
          <Share />
          <Snackbar
            style={{ bottom: 120 }}
            open={open}
            autoHideDuration={2000}
            onClose={handleSnackClose}
          >
            <Alert onClose={handleSnackClose} severity="info">
              Link copied to Clipboard!
            </Alert>
          </Snackbar>
        </IconButton>
      </ButtonGroup>
      <Divider />
      <div className="mt-2 px-1">
        <Typography variant="body1" color="textPrimary" component="p">
          {props.caption}
        </Typography>
      </div>
    </Paper>
  );
}
