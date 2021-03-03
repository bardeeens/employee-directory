import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    firstName: "",
    lastName: "",

  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchAPI("results=1000");
  }

  searchAPI = query => {
    API.search(query)
      .then(res => {
        // console.log("First Name:", res.data.results[1].name.first);
        // console.log("Last Name:", res.data.results[1].name.last);
        // console.log("Photo:", res.data.results[1].picture.thumbnail);
        console.log("City:", res.data.results[1].location.city);
        console.log("State:", res.data.results[1].location.state);
        console.log("Country:", res.data.results[1].location.country);
        console.log(res.data.results[1]);
        this.setState({ results: res.data.data })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div className="container">
        {}
      </div>
    );
  }
}

export default SearchResultContainer;
