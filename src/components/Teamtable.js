import React, { Fragment,useEffect } from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import {TableBody,TableRow,TableHead,TableCell,Table,Button,Radio,Chip} from '@material-ui/core';
import {VisibilityOutlined,EditOutlined,DeleteOutline,Add} from '@material-ui/icons';


import Management from './Management'
const useStyles = makeStyles({
  table: {
    width: 1000,
    alignSelf:"center"
  },
  container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignSelf:"center",
      alignItems:"flex-start",
      height:"100vh",
      marginTop:'-10px'
  },

  button:{
      width:200,
      backgroundColor:"#673AB7",
      color:"white"
  },

  options:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"300px",
      alignSelf:"flex-start",
      color:"white",
      margin:"50px",
      marginLeft:0,

  },
  headRow:{
    backgroundColor:'#f2f2f2',
    boxShadow:' 0 6px 6px -6px grey;'
  },
  Chip:{
    width:'150px',
    padding:'13px',
    fontSize:'12px'
  },
  AllAccessChip:{
    backgroundColor:'#BEE7CF',
    border:'1px solid #27ae60',
    color:'#27ae60',
    
  },
  RestrictedChip:{
    backgroundColor:'#ffb5b5',
    border:'1px solid #ff1e1e',
    color:'#ff1e1e',
  },
  radiobtn:{
    marginRight:'10px',
    opacity:10,
  },
  icons:{
   
    color:"#757575"
    
  },
  checkedIcon: {
    backgroundColor: "#E0E0E0",
    backgroundImage:
      "linear-gradient(180deg,#ffffff,#ffffff,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#ffffff,#ffffff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#ffffff"
    }
  },
  dataRow:{
    boxShadow:'0 3px 3px -3px grey;',
  }


});
function createData(department, access, members, updated, eye) {
  
  return { department, access, members, updated, eye };
}

const rows = [
  createData('Management Team', 'All Access',4, '1 min ago', ""),
  createData('Procurement Team', 'Restricted Access', 8, '1 min ago', ""),
  createData('Project Team', 'Restricted Access', 16, '1 min ago',""),
  createData('IT Team', 'Restricted Access', 4, '1 min ago',""),
  createData('SuperAdmin', 'Restricted Access', 1, '1 min ago', ""),
];

export default function BasicTable({switchTable,setSwitchTable}) {
  const classes = useStyles();

  useEffect(() => {
    console.log(switchTable)
  }, [switchTable])

  const [selectedValue, setSelectedValue] = React.useState('');


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if(event.target.value === 'Management Team')
     setSwitchTable(true);
     console.log(switchTable);
  };
  return (<Fragment>{switchTable === true ? <Management  setSwitchTable={setSwitchTable}/> : 
    <div className={classes.container}>
        <div className={classes.options}>
        <Button 
        className={classes.button}
        variant="contained"
        size="small"
        className={classes.button}
        startIcon={<Add />}
      >
        Add Role
      </Button>
      <EditOutlined className={classes.icons} color="disabled"/>
      <DeleteOutline className={classes.icons} color="disabled"/>

      

        </div>
        
       <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.headRow}>
            <TableCell>Department/Role Name</TableCell>
            <TableCell align="justify">
              Access Level</TableCell>
            <TableCell align="center">No. of members</TableCell>
            <TableCell align="justify">Last Updated</TableCell>
            <TableCell align="justify"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.department} className={classes.dataRow}>
              <TableCell component="th" scope="row">
              {/* <Radio
              style={{opacity:"100"}}
        checked={selectedValue === row.department}
        onClick={handleChange}
        value={row.department}
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            
        icon={<span className={classes.icon} />}
        classes={{colorPrimary:classes.radiobtn}}
        name="department"
        inputProps={{ 'aria-label': 'D' }}
      /> */}
       <Radio
        checked={selectedValue === row.department&&switchTable}
        onClick={handleChange}
        value={row.department}
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
                {row.department}
              </TableCell>
              <TableCell align="justify">
                <Chip className={classes.Chip}   variant="outlined" size="small" label={row.access} color = {row.access === "All Access" ? "primary":"secondary" } classes={{colorPrimary:classes.AllAccessChip,
                colorSecondary:classes.RestrictedChip}
              } />
                </TableCell>
              <TableCell align="center">{row.members}</TableCell>
              <TableCell align="justify">{row.updated}</TableCell>
              <TableCell align="justify"><VisibilityOutlined color="disabled"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>}
      </Fragment>
    
  );
}