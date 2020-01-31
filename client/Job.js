import React from "react";

const  Job = props => (
  <div key={`Job${props.id}`}>
    <span>{props.job}</span>
    <button value={props.id} onClick={props.deleteJob}>
      DeleteMe
    </button>
  </div>
);

export default Job;