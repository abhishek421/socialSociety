import {SwipeableDrawer,Avatar, Divider, Button} from '@material-ui/core';
import {useState} from 'react';
import {HomeRounded, AccountCircleRounded, SettingsRounded} from '@material-ui/icons'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

function Sidebar(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  
  return (
        <SwipeableDrawer
          anchor='right'
          open = {props.open}
          onOpen = {() => props.setOpen(true)}
          onClose = {() => props.setOpen(false)}
        >
         <div className='d-flex justify-content-between flex-column h-100'>
         <div>
          <div className='d-flex flex-column align-items-center mx-2 my-1'>
            <Avatar style={{height:'3em',width:'3em',border:'solid 1px blue'}} alt='Abhishek' src='https://uploads-ssl.webflow.com/5f4da33ec5a46e999f9cc86e/5f4dc33abfdf4b5c21de3ca6_WhatsApp%20Image%202020-07-28%20at%206.55.46%20PM.jpeg' />
            <p className='h5 mt-2'>Abhishek Choudhary</p>
          </div>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              component={Link}
              to='/'
              selected={selectedIndex === 0}
              onClick={(event) => {handleListItemClick(event, 0);
              }}
            >
              <ListItemIcon>
                <HomeRounded/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='/profile'
              selected={selectedIndex === 1}
              onClick={(event) => {handleListItemClick(event, 1)}}
            >
              <ListItemIcon>
                <AccountCircleRounded />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='/setting'
              selected={selectedIndex === 3}
              onClick={(event) => {handleListItemClick(event, 2);}}
            >
              <ListItemIcon>
                <SettingsRounded />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
          <div className='d-flex flex-column align-items-center p-3'>
            <p className='fw-light' style={{fontSize:'1em'}}>abhishek0art@gmail.com</p>
            <Button fullWidth color='primary' variant='outlined'> Sign Out
            </Button>
          </div>
         </div>
        </SwipeableDrawer>
    );
}

export default Sidebar;
