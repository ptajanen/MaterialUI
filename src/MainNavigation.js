import React from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    listitem: {
        display: 'inline-block',
        width: 150,
        textAlign: 'right'
    }
});

const listitems = [
    {
        text:"Home",
        id : 1,
        path: '/'
    },
    {
        text:"About",
        id : 2,
        path:'/About'
    },
    {
        text:"Contact",
        id :3,
        path:'/Contact'
    }
    
]

const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Link to={item.path}>{item.text}</Link>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
       
        </div>
    );
};

export default MainNavigation;