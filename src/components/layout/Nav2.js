import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Tabs,Typography,Tab,Divider} from "@material-ui/core";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CachedIcon from '@material-ui/icons/Cached';


//pallete to change color
const mytheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#673ab7'
    }
  }
});


//styling tabs
const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 90,
      borderRadius: "5px",
      width: "60%",
      backgroundColor: "#673ab7"
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


//styling container tab
const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    height: "10px",
    padding: 0,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    "&:focus": {
      opacity: 1
    },
    display: "flex",
    flexDirection: "row"
  }
}))((props) => <Tab disableRipple {...props} />);



//basic styling
const useStyles = makeStyles((theme) => ({
  root: {
    
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    height:"72px",
    // backgroundColor:"red"

    borderBottom:"4px solid #dadada"
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo2: {
    height: "72px",
    backgroundColor: "#fff",
    width:"300px"
    // float:"left"
  },

  sync:{
    float:"right",
    position:"relative",
    margin:"10px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:"25px"

  },
  Icon:{

    color:"#757575",
    marginRight:5
  }
}));


//function
export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={mytheme}>
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          indicatorColor="secondary"
        textColor="secondary"
        >
          <StyledTab icon={<RssFeedIcon className={classes.Icon}/>} label="Permissions" />
          <Divider orientation="vertical"/>
          <StyledTab icon={<ViewModuleOutlinedIcon className={classes.Icon}/>} label="Approval Matrix" />
        </StyledTabs>
        <Typography className={classes.padding} />
       
      </div>
      <div className={classes.sync}>
        <div> <CachedIcon className={classes.Icon}/></div>   <span>Last synced 15 mins ago</span> </div>
       
    </div>
    </MuiThemeProvider>
  );
}
