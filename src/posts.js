import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Postdata from './postdata';

const useStyles = makeStyles({
    text: {
      overflow: 'hidden',
      height: 80,
    },
    card: {
      minWidth: 250
    },
    readMoreButton: {
      fontSize: '.6em',
    }
  });

  const Posts = ({match}) => {
    const classes = useStyles();
    const Posts = Postdata;
  
    
    
    return (
        <div style={{marginTop:150, padding:20}}>

            <Grid container spacing={3}>

                {Postdata.map(postitem => (

                    <Grid item xs={3} key={postitem.id} className={classes.card}>

                    <Card key={postitem.id} style={{ height: 450 }}>
                    <CardMedia
                        component="img"
                        alt={postitem.title}
                        height="100"
                        image={postitem.image}
                    />
                    <CardContent style= {{ height: 110 }}>
                        <Typography variant="h6">
                            {postitem.title}
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                            {postitem.text}
                        </Typography>
                    </CardContent>

                        <CardActions>
                            <Button 
                                component={Link}to={`${postitem.id}`}
                                variant="outlined"
                                color="primary"
                                label="Read more"
                                value="Read more"
                                className={classes.readMoreButton}>Read more
                                </Button>
                             
                        </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
    </div>
    );
};

export default Posts;