import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const Data = props => (
  <div className="content">
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>xs=4</Paper> */}
          <div className="post_image">
            {props.img_url && (
              <p>
                <img className="post_image" src={props.img_url} />
              </p>
            )}
          </div>
        </Grid>
        <Grid item xs={8}>
          {/* <Paper className={classes.paper}>xs=8</Paper> */}
          <div classname="post_content">content</div>
        </Grid>
      </Grid>
    </Paper>
  </div>
);
