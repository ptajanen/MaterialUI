import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	imageContainer: {
		verticalAlign: 'top',
		display: 'inline-block',
		textAlign: 'center',
	  width: 420,
	},
	image: {
		height: 300,
		maxWidth: 1000,
		float: 'left',
		padding: '25px 0 25px 0',
		// display: 'block',
	},
	text: {
		padding: '25px 0 25px 0',
		display: 'block',
	},
	homeButton: {
		display: 'block',
    width: 'fit-content',
    fontSize: '.7em',
    textAlign: 'center',
	}
})

const Post = ({match, data}) => {
    const classes = useStyles();
    let post = data.find(p => p.id === match.params.postId);
    return (
        <div>
            <div style={{ margin: 150, paddingTop:50}}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="title">Post #{post.id}</Typography>
                <img className={classes.image} src={post.image} alt={post.title}/>
                <Typography variant="body1" className={classes.text}>
                    {post.text}

</Typography>
<Button variant="outlined" component={Link} to= '/'> Back to home</Button>
          </div>
        </div>
    );
};

export default Post;