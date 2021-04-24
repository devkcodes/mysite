import React from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Radio,Collapse, TableBody,Paper,TableHead,TableRow,TableCell,TableContainer,Table,Switch ,FormControlLabel,FormGroup,FormControl,FormLabel,Chip,RadioGroup,Checkbox} from '@material-ui/core';


import IconButton from '@material-ui/core/IconButton';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useRowStyles = makeStyles({
  root: {height:"60px",
    '& > *': {
      borderBottom: 'unset',
    },
    boxShadow:'0 3px 3px -3px grey;',
  },
  insideBox:{
    // backgroundColor:'grey',
    width:'100%',
    height:'280px',
    marginLeft:'80px',
    fontSize:'16px'
  },
  flexInside:{
    display:'flex',
    // backgroundColor:'red',
    justifyContent:'flex-start',
    alignItems:'stretch',
    height:'80%'

  },
  accessControl:{
    display:'flex',
    flexDirection:'column',
    paddingLeft:'2%',
    width:'350px',
    height:'100%',
    // backgroundColor:'pink',
    justifyContent:'flex-start',
    margin:'0 20px 0 30px',
    borderRight:'1px solid #e0e0e0',
    
  },
  radioGroup:{
    height:'60%',
    // backgroundColor:'yellow',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignSelf:'flex-start',
    marginTop:'30px'
  },
    radioDesc:{
    display:'flex',
    flexDirection:'column'
  },
  radioDescText:{
    fontSize:'14px',
    color:'#dedede',
    marginLeft:'30px'
  },

    icon:{
    borderRadius: "50%",
    width: '16px',
    height: '16px',
    border:'solid #E0E0E0 2px'
    
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
  NoAccessChip:{
    backgroundColor:'#f2f2f2',
    border:'1px solid #bdbdbd',
    color:'#bdbdbd',
    padding:'10px'
  },
    dataRow:{
    boxShadow:'0 3px 3px -3px grey;',
  },
    headRow:{
    backgroundColor:'#f2f2f2',
    boxShadow:' 0 6px 6px -6px grey;'
  },


});

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#27AE60',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});




function createData(department,access, summary, updated, slider) {
  return {
    department,
    access,
    summary,
    updated,
    slider,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
    aspects: [
      {AccessControl: [
        'AllAccess',
        'RestrictedAccess',
      ]},
      {
        Permissions:[
          'View Items in acecess',
          'Edit items in access',
          'Create items in access',
          'Delete items in access'

        ]
      }
    ],
  };
}













const PurpleCheckBox = withStyles({
  root: {
    color: "#757575",
    "&$checked": {
      color: "#673AB7"
    }
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  //Inside Radio buttons
    const [selectedValue, setSelectedValue] = React.useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //switch
    const [switchstate, setswitch] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleSwitchChange = (event) => {
    setswitch({ ...switchstate, [event.target.name]: event.target.checked });
  };


  //radio

  const [value, setValue] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  //checkbox
   const [checkboxState, setcheckbox] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false
  });

  const handlecheckbox = (event) => {
    setcheckbox({ ...checkboxState, [event.target.name]: event.target.checked });
  };



  return (
    <React.Fragment>
      <TableRow className={classes.root} style={{padding:0,}}>
        <TableCell style={{paddingTop:0,paddingBottom:0}}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{paddingTop:0,paddingBottom:0}} component="th" scope="row">
          {row.department}
        </TableCell>
        <TableCell style={{paddingTop:0,paddingBottom:0}} align="center">
          <Chip className={classes.Chip}  variant="outlined" size="small" label={row.access} color = {row.access === "All Access" ? "primary":"secondary" } classes={{colorPrimary:classes.AllAccessChip,
                colorSecondary:classes.RestrictedChip,
                sizeSmall: classes.NoAccessChip
            }} 
                size= {row.access === "No Access" ?"small":"medium" }
              />
        </TableCell>
        <TableCell style={{paddingTop:0,paddingBottom:0}} align="center">{row.summary}</TableCell>
        <TableCell style={{paddingTop:0,paddingBottom:0}} align="center">{row.updated}</TableCell>
        <TableCell style={{paddingTop:0,paddingBottom:0}} align="center">
        <FormGroup>
  
      <FormControlLabel
        control={<IOSSwitch checked={switchstate.checkedB} onChange={handleSwitchChange} name="checkedB" />}
        label=""
      />
      
    </FormGroup>
        </TableCell>
      </TableRow>
      <TableRow style={{padding:0,}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.insideBox}>
            <p>All aspects in the bidding module</p>
            <div className={classes.flexInside}>
              <FormControl component="fieldset"  className={classes.accessControl}>
                <span >Access Control</span>
        <RadioGroup className={classes.radioGroup} aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          
          <div className={classes.radioDesc}>
            <FormControlLabel value="best" control={<Radio />} label="All Access" />
            <span className={classes.radioDescText}>Can access all items</span>
          </div>
          <div className={classes.radioDesc}> 
            <FormControlLabel value="worst" control={<Radio />} label="Restricted Access" />
              <span className={classes.radioDescText}>Can access only assigned or created items</span>
          </div>
        
        </RadioGroup>
  
      </FormControl>
      <FormGroup column>
        <span>Permissions</span>
      <FormControlLabel
        control={
          <PurpleCheckBox
            checked={checkboxState.checkedA}
            onChange={handlecheckbox}
            name="checkedA"
            color="default" 
            classes={{
              root:classes.checkroot
            }}
            
          />
        }
        label="View items in access"
      />
      <FormControlLabel
        control={
          <PurpleCheckBox
            checked={checkboxState.checkedB}
            onChange={handlecheckbox}
            name="checkedB"
          />
        }
        label="Edit items in access"
      />
      <FormControlLabel
        control={
          <PurpleCheckBox
            checked={checkboxState.checkedF}
            onChange={handlecheckbox}
            name="checkedF"
          />
        }
        label="Create items in access"
      />
      <FormControlLabel
        control={
          <PurpleCheckBox
            checked={checkboxState.checkedG}
            onChange={handlecheckbox}
            name="checkedG"
          />
        }
        label="Delete items in access"
      />
    </FormGroup>
    
            </div>
          </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};











const rows = [
  createData('Budget', 'All Access','View|Create|Edit|Delete', "1 min ago", 4.0, 3.99),
  createData('Bidding', 'No Access', '-', '1 min ago', 4.3, 4.99),
  createData('Vendor Portal', 'Restricted Access', 'View|Create', '1 min ago', 6.0, 3.79),
  createData('Purchase Order/Work Order', 'Restricted Access','View|Create', '1 min ago', 4.3, 2.5),
  createData('Permissions & Access Control', 'All Access', 'View|Create|Edit|Delete', '1 min ago', 3.9, 1.5),
  createData('Organizational Profile', 'No Access', '-', '1 min ago', 3.9, 1.5),
];

export default function CollapsibleTable() {
  const classes = useRowStyles();
  return (
    <TableContainer style={{width:"1000",overflowX:"hidden"}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.headRow} style={{height:"60px"}}>

            <TableCell />
            <TableCell>Department/Role Name</TableCell>
            <TableCell align="center">Access Level</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row}  />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}