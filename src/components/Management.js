import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,TableBody,TableRow,TableHead,TableCell,Table,Button,Tab,Tabs,AppBar,} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CollapseTable from './CollapseTable'
import ManageTab from './ManageTab'



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
}

const useStyles = makeStyles({
    table: {
        width: 1000,
       
        
      },
      container:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-evenly",
          alignSelf:"center",
          alignItems:"flex-start",
          height:"50vh"
      },
    
      text:{
          width:100,
          backgroundColor:"#673AB7"
      },
    
      options:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          width:"300px",
          alignSelf:"flex-start",
          marginLeft:"-20"
    
      },
    
      icons:{
          color:"#757575",
          backgroundColor:"white"
      },

      text:{
        color:"#673ab7"
      },

      bar:{
        marginTop:"30px"
      }
    
    
    
});

export default function Management({ setSwitchTable}) {
  const classes = useStyles();

  const goback= ()=>{setSwitchTable(false);}
  
  return (
    <div className={classes.container}>
        <div className={classes.options}>
      <Button onClick={goback}><KeyboardBackspaceIcon className={classes.icons}/></Button>

        <Typography 
        className={classes.text}
        variant="contained"
        
        variant="h6"
      >
       Management Team
      </Typography>
     
      <EditOutlinedIcon className={classes.icons}/>
 </div>
 <div  className={classes.bar}>
 <ManageTab/>

 </div>
        
      <div className={classes.table} aria-label="simple table">
      <CollapseTable/>
      </div>
      </div>
    
  );
}