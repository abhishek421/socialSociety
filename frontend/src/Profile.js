import { AppBar, Avatar, Box, Button, Divider, GridList, GridListTile, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { MenuRounded } from '@material-ui/icons';
import { useState } from 'react';
import SideBar from './SideBar';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PostCard from './PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      padding:0,
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        margin:0,
        padding:0
    },
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Profile() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tileData = [
      {
         img: 'https://www.hauteresidence.com/wp-content/uploads/2021/05/shutterstock_11290851681.jpg',
         title: 'Image',
         author: 'author',
         cols: 1,
       },
       {
        img: 'https://static.toiimg.com/thumb/msid-79751682,imgsize-409048,width-800,height-600,resizemode-75/79751682.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/30/13/Eyes-Wide-Shut-Tom-Cruise.jpg?width=982&height=726&auto=webp&quality=75',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://cdn.britannica.com/w:1100/11/185311-131-A05F5992/Tom-Cruise-Top-Gun-Tony-Scott.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://www.hauteresidence.com/wp-content/uploads/2021/05/shutterstock_11290851681.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
       img: 'https://static.toiimg.com/thumb/msid-79751682,imgsize-409048,width-800,height-600,resizemode-75/79751682.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/30/13/Eyes-Wide-Shut-Tom-Cruise.jpg?width=982&height=726&auto=webp&quality=75',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://cdn.britannica.com/w:1100/11/185311-131-A05F5992/Tom-Cruise-Top-Gun-Tony-Scott.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
        img: 'https://www.hauteresidence.com/wp-content/uploads/2021/05/shutterstock_11290851681.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
       img: 'https://static.toiimg.com/thumb/msid-79751682,imgsize-409048,width-800,height-600,resizemode-75/79751682.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/30/13/Eyes-Wide-Shut-Tom-Cruise.jpg?width=982&height=726&auto=webp&quality=75',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://cdn.britannica.com/w:1100/11/185311-131-A05F5992/Tom-Cruise-Top-Gun-Tony-Scott.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
        img: 'https://www.hauteresidence.com/wp-content/uploads/2021/05/shutterstock_11290851681.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
       img: 'https://static.toiimg.com/thumb/msid-79751682,imgsize-409048,width-800,height-600,resizemode-75/79751682.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/30/13/Eyes-Wide-Shut-Tom-Cruise.jpg?width=982&height=726&auto=webp&quality=75',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
       img: 'https://cdn.britannica.com/w:1100/11/185311-131-A05F5992/Tom-Cruise-Top-Gun-Tony-Scott.jpg',
       title: 'Image',
       author: 'author',
       cols: 1,
      },
    ];

  return (
    <div>
        <AppBar className='mb-2' position='fixed' style={{top:'0',zIndex:'1000'}}>
            <Toolbar className='d-flex flex-row align-items-center justify-content-between px-2'>
                <Typography edge='start' variant="h6">
                    @iamtom
                </Typography>
                <IconButton color='inherit' onClick={() => setOpen(true)}>
                    <MenuRounded />
                </IconButton>
            </Toolbar>
        </AppBar>
        <SideBar open={open} setOpen={setOpen} />
        <div style={{marginTop:'4.4em'}} className='px-4 w-100'>
            <div className='d-flex flex-row mb-2 w-100 align-items-center'>
                <Avatar style={{height:'5em',width:'5em'}} src='https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg'/>
                <div className='d-flex flex-row justify-content-evenly w-100'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>{tileData.length}</h4>
                        <h6>Posts</h6>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>9.7 <strong>M</strong></h4>
                        <h6>Followers</h6>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>241</h4>
                        <h6>Following</h6>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column mb-4'>
                <Typography variant="h5">
                    Tom Cruise
                </Typography>
                <Typography variant="body1" color='textSecondary'>
                    I don't need stuntmans !!
                </Typography>
            </div>
            
            <div className='d-flex flex-row mb-4'>
            <Button variant='outlined' color='default'>Edit Profile</Button>
            </div>
        </div>
       
        <Divider style={{backgroundColor:'black'}} />
        <AppBar position="static" color="white" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Grid" {...a11yProps(0)} />
          <Tab label="Feed" {...a11yProps(1)} />
        </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} className='d-flex flex-column' dir={theme.direction}>
                <GridList cellHeight={120} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} style={{objectFit:'cover',height:'33vw',width:'33vw'}} alt={tile.title} />
                    </GridListTile>
                    ))}
                </GridList>
            </TabPanel>
            <TabPanel value={value} index={1} className='d-flex flex-column h-100' dir={theme.direction}>
            {tileData.map((tile) => (
                <PostCard img={tile.img} user={'https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg'} userName={'Tom Cruise'} caption={'Hahahahah'}/>
            ))}
            </TabPanel>
        </SwipeableViews>
    </div>
    );
}

export default Profile;