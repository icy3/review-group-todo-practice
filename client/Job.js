import React from "react";
import App from "./App.js";


const Job = props => (
  <div >
    {/* {console.log(props)} */}
    <div>{props.id}{props.item}</div>
    <div></div>
    <button value={props.id} onClick={props.deleteJob}>
      DeleteMe
    </button>
  </div> 
)
export default Job;