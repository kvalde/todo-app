import React from 'react';
import { Grid, Paper } from '@material-ui/core'

export default function ListItem (props) {
    return (
        <div>
            <Paper style={{padding: "5px", margin: "5px" , backgroundColor: "grey", color: "white"}}>
                <Grid container justify="center" direction="column" alignItems="center">
                    <span xs={6}>
                        Description: {props.description}
                    </span>
                    <span xs={6}> 
                        ToDo: {props.todo}
                    </span>
                </Grid>
            </Paper>
        </div>
    )
}