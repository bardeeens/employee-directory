import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../utils/API";
import Employee from "./Employee";



class SearchResultContainer extends Component {
  
  state = {
    result: [],
    filtered: []
  };
 
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchAPI("results=20");
  }

  searchAPI = query => {
    API.search(query)
      .then(({ data }) => {
        this.setState({
          result: data.results,
          filtered: data.results
        })
      })
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the Giphy API for `this.state.search`
  
  country() {
    
  }

  render() {
    return (
     
      <>
        { 
         this.state.filtered.map((item) => {
          // console.log(item);
          return <Employee first={item.name.first} last={item.name.last} photo={item.picture.thumbnail} state={item.location.state} country={item.location.country} email={item.email} phone={item.phone} />
        })}
        
      </>
    );
  }
}

export default SearchResultContainer;
