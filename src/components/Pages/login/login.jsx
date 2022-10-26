import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContextt";
import "./login.scss";
import useWindowPosition from "../../../hook/useWindowPosition";
import LoginCard from "./loincard";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    // display: 'flex',
    justifyContent: 'center',
    // background: 'rgb(193, 190, 255)',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      // flexDirection: 'column',
    },
  },
}));
const Login = () => {
  const checked = useWindowPosition('header');
  const classes = useStyles();
  
  return (
    <div className={classes.root}id ="login-card">
      <LoginCard checked={checked}/>
    </div>
    
  );
};

export default Login;