import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  container_main: {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5rem"
  },
  button: {
    margin: theme.spacing.unit,
    width: "18%",
    variant: "flat",
    padding: "dense"
    // size: "medium"
    // background: "rgb(255, 56, 56)"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class MainComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container_main}>
        <div className="topbar">
          <Button
            className={classes.button}
            color="primary"
            type="submit"
            variant="raised"
          >
            Search
          </Button>
          <Button
            className={classes.button}
            color="primary"
            type="submit"
            variant="raised"
          >
            Search
          </Button>
          <Button
            className={classes.button}
            color="primary"
            type="submit"
            variant="raised"
          >
            Search
          </Button>
          <Button
            className={classes.button}
            color="primary"
            type="submit"
            variant="raised"
          >
            Search
          </Button>
          <Button
            className={classes.button}
            color="primary"
            type="submit"
            variant="raised"
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

MainComponent.propTypes = {
  //   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainComponent);
