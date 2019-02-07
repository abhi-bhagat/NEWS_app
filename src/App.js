import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainComponent from "./components/MainComponent";
import Heading from "./components/Heading";

const API_KEY = "c3226bc9568a4454b02956695d467773";
class App extends Component {
  state = {
    author: null,
    title: null,
    description: null,
    url: null,
    img_url: null,
    pub_time: null,
    content: null,
    source_name: null
  };

  searchNews = async event => {
    console.log(this.state);

    const { country } = "ca";

    const url = `https://newsapi.org/v2/top-headlines?country=${
      country.value
    }&apiKey=${API_KEY}`;

    const api_call = await fetch(url);

    const data = await api_call.json();

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
    return (
      // <searchBar>
      <div>
        <Heading />
        <SearchBar />
        <MainComponent />
      </div>
    );
  }
}

export default App;
