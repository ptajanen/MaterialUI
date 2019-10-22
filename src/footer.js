import React from 'react';
import {makeStyles } from '@material-ui/styles';
import { Grid, Radio, RadioGroup, TextField, FormGroup, FormControl, FormLabel, FormControlLabel, Checkbox, Button } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        backgroundColor: "beige"
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:25,
        background:"rgb(129,1,58)"
    },
    input: {
        marginBottom: "1rem"        
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container
            justify="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <form className={classes.form}>
                        <FormControl>
                            <TextField className={classes.input} fullWidth label="First Name"/>
                            <TextField className={classes.input} fullWidth label="Last Name"/>
                            <TextField className={classes.input} fullWidth label="Phone" type="phone"/>
                            <TextField className={classes.input} fullWidth label="Email" type="email"/>
                    
                            <FormLabel component="legend">Subscription type</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                                <FormControlLabel value="yearly" control={<Radio />} label="Yearly" />
                                <FormControlLabel value="already" control={<Radio />} label="Already subscribed" />
                            </RadioGroup>

                            <FormLabel component="label">Interests</FormLabel>
                            <FormGroup>
                                <FormControlLabel value="end"
                                control={<Checkbox color="primary" />} 
                                label="Music"
                                labelPlacement="End"
                                /> 
                            <FormControlLabel value="end"
                            control={<Checkbox color="primary" />} 
                            label="Animals"
                            labelPlacement="End"
                            /> 
                            <FormControlLabel value="end"
                            control={<Checkbox color="primary" />} 
                            label="Cars"
                            labelPlacement="End"
                            /> 
                        </FormGroup>
                        <Button variant="contained" color="black">Submit</Button>
                    </FormControl>
                    </form>
                </Grid>
            </Grid>
        </footer>
    )
}
export default Footer;