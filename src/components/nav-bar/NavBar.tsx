import React from 'react';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import multiplyLogo from "../../assets/assets/images/multiply-logo.svg";
import { useStyles } from './styles';

interface IProps {
    logout: () => void
}

const NavBar: React.FC<IProps> = ({ logout }: any) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolBar}>
                <img src={multiplyLogo} alt="Logo" />
                <Typography className={classes.title} />
                <Button className={classes.button}>What is Multiply</Button>
                <Button className={classes.button}>Get Multiply</Button>
                <Button onClick={logout} className={classes.button}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;