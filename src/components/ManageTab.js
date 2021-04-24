import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Tabs,Typography,Tab,Divider} from "@material-ui/core";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ViewModuleTwoToneIcon from '@material-ui/icons/ViewModuleTwoTone';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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
    flexGrow: 1,
    // borderBottom:"2px solid grey"
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo2: {
    height: "72px",
    backgroundColor: "#fff",
    // float:"left"
  }
}));


//function
export default function ManageTabs() {
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
          <StyledTab label="Access Control" />
          <Divider />
          <StyledTab  label="Assigned Members" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
    </MuiThemeProvider>
  );
}
