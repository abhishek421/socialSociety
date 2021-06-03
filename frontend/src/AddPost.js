import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import {AddBoxRounded, AddRounded, CloudUpload, DeleteRounded} from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {TextField} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    top:0,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState('');
  const [caption, setCaption] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="default" onClick={handleClickOpen}>
       <AddBoxRounded />
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography edge='start' variant="h6" className={classes.title}>
              Add Post
            </Typography>
            <IconButton color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className='d-flex flex-column w-100 align-items-center h-100' style={{marginTop:'4em'}}>
            <div className='d-flex flex-column w-100 align-items-center mb-2'>
            <CardMedia
              component='img'
              alt='Upload Preview'
              style={{maxHeight:'80vw',minHeight:'60vw',width:'60vw',objectFit:'contain',border:'0.5px solid black'}}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_2_QEwTUpIq6IOT2_zWXLuiNkKxFm1Cd7A&usqp=CAU"
              title="Upload Preview"
            />
            <div className='d-flex flex-row p-2 justify-content-evenly w-100 align-items-center'>
                <Button
                  variant="contained"
                  color="danger"
                  startIcon={<DeleteRounded />}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CloudUpload />}
                >
                  Upload
                </Button>
             </div>
            </div>
            <Divider/>
            <div className='d-flex flex-column px-2 w-100 align-items-center'>
              <TextField fullWidth multiline label="Caption" variant="filled" />
              <div className='d-flex flex-row p-2 justify-content-evenly w-100 align-items-center'>
                <Button color='danger' variant='outlined'>Cancel</Button>
                <Button color='primary' variant='outlined'>Post</Button>
              </div>
            </div>
          </div>
      </Dialog>
    </div>
  );
}
