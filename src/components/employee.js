import React, { Component } from "react";
// import './App.css';
// import SearchResultContainer from './components/SearchResultContainer';

function Employee(props) {
  return (
    
     
      <div className="row">
        <div className="col"><img src={props.photo} /></div>
        <div className="col">{props.first} {props.last}</div>
        <div className="col">{props.email}</div>
        <div className="col">{props.location}</div>
      </div>
      
    
   
  );
}

export default Employee;