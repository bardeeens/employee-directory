import React, { Component } from "react";
import '../utils/css/Employee.css';
// import SearchResultContainer from './components/SearchResultContainer';

function Employee(props) {
  return (
    
     
      <div className="row">
        <div className="col border"><img src={props.photo} /><br/>
        {props.first} {props.last}
        </div>
        <div className="col border">{props.email}<br/>{props.phone}</div>
        <div className="col border">{props.state},<br/> {props.country} </div>
      </div>
      
    
   
  );
}

export default Employee;