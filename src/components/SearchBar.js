import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: "2rem"
  },

  textField: {
    width: " 70% "
  },

  button: {
    margin: theme.spacing.unit,
    width: "28%"
  }
});

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      author: null,
      title: null,
      description: null,
      url: null,
      img_url: null,
      pub_time: null,
      content: null,
      source_name: null
    };
  }

  searchNews = async event => {
    console.log(this.state);

    const country = "ca";

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c3226bc9568a4454b02956695d467773`;

    const api_call = await fetch(url);

    const data = await api_call.json();

    console.log(data);

    // fetching data

    if (country && data.cod !== "404") {
      this.setState({
        author: data.atricles.author,
        title: data.atricles.title,
        description: data.atricles.description,
        url: data.atricles.url,
        img_url: data.atricles.urlToImage,
        pub_time: data.atricles.publishedAt,
        content: data.atricles.content,
        source_name: data.atricles.source.name
      });
    } else {
      this.setState({
        author: null,
        title: null,
        description: null,
        url: null,
        img_url: null,
        pub_time: null,
        content: null,
        source_name: null
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        // onSubmit={props.fetchNews}
      >
        <TextField
          id="outlined-with-placeholder"
          label="Keyword or Phrase Search"
          placeholder="Keyword or Phrase Search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <Button
          // onClick={searchNews}
          onClick={this.searchNews()}
          className={classes.button}
          color="primary"
          type="submit"
          variant="raised"
        >
          Search
        </Button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
