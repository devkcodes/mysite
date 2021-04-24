import Sidebar from './components/layout/Sidebar'
import React from 'react'
import Nav from './components/layout/Nav'
import CustomisedTabs from './components/layout/Nav2'
import BasicTable from './components/Teamtable'
import Management from './components/Management'
import ManageTab from './components/ManageTab'
import './App.css';
import {Fragment} from 'react'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
 
import { createMuiTheme } from '@material-ui/core/styles';
import CollapsibleTable from './components/CollapseTable'


const Font = createMuiTheme({
  palette: {
    primary: {
      main:"#fff",
    }},
  typography: {
    fontFamily: [
      'Roboto', 'sans-serif',
    ].join(','),
    fontWeight:"500",
    
    Fontcolor:"#F1304D"
}});

const useStyles = makeStyles((theme) => ({

  Divmain:{
    backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'row',
  

},
DivRest:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  // alignItems:"center",
  height:"90vh"
},

management:{
alignSelf:"center",
}
  
  }));
  
  

function App() {
  const classes = useStyles();
  const [switchTable, setSwitchTable] = React.useState(false);


  return (
    <MuiThemeProvider theme={Font}>
    <div className={classes.Divmain}>
      
      <div className={classes.DivSidebar}>
      <Sidebar/>
      </div>
      
      <div className={classes.DivRest}>
        <div className={classes.nav}>
        <Nav/>
        <CustomisedTabs/>
        </div>
      <div className={classes.management}>
        <BasicTable switchTable={switchTable} setSwitchTable={setSwitchTable}/>
      </div>
      
      
      </div>
      
     
     
    </div>
    </MuiThemeProvider>
  );
}

export default App;
