import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';


const useStyles = makeStyles((theme) => ({

SidebarContainer:{
  backgroundColor: '#FCFBFF',
  height:"1080px",
  width:"295px",
  zIndex:"100",
},
   
Sidebar:{
  display: 'flex',
  flexDirection: 'column',
  spacing: '3'
},

SidebarList:{
  width:"100%",
  backgroundColor: 'white',
},

SidebarListItem:{
  color:"#757575"
},

SidebarListItemText:{
  textAlign: 'left',
  fontWeight:"500",
  fontSize:"18px"
},
selectedListItem:{
  backgroundColor:'#E1D8F1',
  borderLeft:'7px solid #673AB7'
},
selectedIcon:{
color:'#673AB7',
}

}));


const Sidebar = () => {
    const classes = useStyles();

  return( 
        <div className={classes.SidebarContainer}>
         <Grid container className={classes.Sidebar} >
           <img src={"https://res.cloudinary.com/dsph4eptm/image/upload/c_scale,w_310/v1619129058/logo_fn5ct9.png"}/>
           <List className={classes.SidebarList}>
             <ListItem className={classes.SidebarListItem}><ListItemIcon><DashboardOutlinedIcon fontSize="large"/></ListItemIcon><ListItemText className={classes.SidebarListItemText}>Projects </ListItemText></ListItem>
             <ListItem className={classes.SidebarListItem}><ListItemIcon><BusinessCenterOutlinedIcon fontSize="large"/></ListItemIcon><ListItemText className={classes.SidebarListItemText}> Organisation Profile</ListItemText></ListItem>
             <ListItem className={classes.SidebarListItem} className={classes.selectedListItem}><ListItemIcon><SecurityOutlinedIcon fontSize="large" classes={{
    colorPrimary: classes.selectedIcon, 

  }} color="primary" /></ListItemIcon><ListItemText className={classes.SidebarListItemText}>Access Control </ListItemText></ListItem>
           </List>
         </Grid>
        </div>
      )
}

export default Sidebar;