import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/shoes.png'
import useStyles from './styles';

const NavBar = ( { totalItems }) => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography varient="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="logo" height="25px" className={classes.image}/>
                    Nardi's Cool Kicks
                </Typography>
                <div className={classes.grow} />
                <div className={classes.buttons}>
                    <IconButton aria-label="show cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default NavBar
