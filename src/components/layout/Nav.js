import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const useStyles = makeStyles((theme) => ({

NavContainer:{
//   backgroundColor: 'green',
  height:"80px",
  width:"1223px",
  zIndex:"99",
  display:'flex',
  flexDirection:'row-reverse',
},

Icon:{
    width:"30px",
    padding:"20px",
    color:"#757575"
},

circle:{
width:"20px",
padding:"20px",
margin:0,
paddingRight:"10px",
color:"#757575"
},

User:{
    margin:0,
    width:"60px",
    padding:"25px",
    paddingLeft:"15px",
    color:"#757575"
}
}));


const Nav = () => {
    const classes = useStyles();

  return( 
        <div className={classes.NavContainer}>
            <div className={classes.Icon}><HelpOutlineOutlinedIcon fontSize="large"/></div>
            <div className={classes.Icon}><NotificationsNoneOutlinedIcon fontSize="large"/></div>
            <div className={classes.User}>
                <h4 style={{margin:0}}>Kishore</h4>
            </div>
            <div className={classes.circle}><FiberManualRecordIcon fontSize="large"/></div>
            
        </div>
      )
}

export default Nav;