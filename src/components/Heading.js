import React from "react";
import { withStyles } from "@material-ui/core/styles";

// import white from "@material-ui/core/colors/white";
// import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  container_main: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5rem",
    background: "blue",
    alignItems: "center",
    justifyContent: "center"
  },

  container__title: {
    size: "32",
    textAlign: "center",
    color: "white"
  }
});

// const Heading = () => (

// );

class Heading extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="container_main">
        <h1 className="container__title">NEWS APP</h1>
        <br />
        <p className="container__subtitle">Latest NEWS with a single click..</p>
      </div>
    );
  }
}

export default withStyles(styles)(Heading);
