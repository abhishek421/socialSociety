import { AppBar, Avatar, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { AddBoxOutlined } from '@material-ui/icons';
import {userData} from './userData'

function ChatScreen() {

  return (
    <div>
        <AppBar className='mb-2' position='fixed' style={{top:'0',zIndex:'1000'}}>
            <Toolbar className='d-flex flex-row align-items-center justify-content-between px-2'>
                <Typography edge='start' variant="h6">
                    Chats
                </Typography>
                <IconButton color='inherit'>
                    <AddBoxOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
        <div>
            <List style={{marginTop:'3em',marginBottom:'4em'}}>
              {userData.map((item) => (
                    <ListItem divider button>
                      <ListItemIcon>
                        <Avatar style={{height:'2.6em',width:'2.6em', marginRight:'1em'}} alt={item.userName} src={item.user} />
                      </ListItemIcon>
                      <div className=''>
                        <Typography variant='h6'>{item.userName}</Typography>
                        <Typography variant='body2'>{item.msg}</Typography>
                      </div>
                    </ListItem>
                ))}
            </List>
        </div>
    </div>
    );
}

export default ChatScreen;