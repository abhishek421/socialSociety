import './App.css';
import Home from './Home';
import AddPost from './AddPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AccountCircle, HomeRounded, Notifications, SearchRounded } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { useState } from 'react';
import Search from './Search';
import Profile from './Profile'
import ChatScreen from './ChatScreen';

function App() {

const [value, setValue] = useState()

function Activity() {
  return (
  <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'90vh'}}>
    <h4>No New Notifications</h4>
  </div>
  );
}

  return (
    <Router>
      <div className="app">
        <div>
        <Switch>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/chats">
            <ChatScreen />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <BottomNavigation
          component={Paper}
          square={true}
          elevation={6}
          style={{alignItems:'center',height:'4em',position:'fixed',bottom:'0',width:'100vw',zIndex:'1000'}}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to='/' label="Home" icon={<HomeRounded />} />
          <BottomNavigationAction component={Link} to='/search' label="Search" icon={<SearchRounded />} />
          <BottomNavigationAction label="Post" icon={<AddPost />} />
          <BottomNavigationAction component={Link} to='/activity' label="Notification" icon={<Notifications />} />
          <BottomNavigationAction component={Link} to='/profile' label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      </div>
    </Router>
  );
}

export default App;
