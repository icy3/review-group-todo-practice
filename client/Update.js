import React from "react";

const Update = props => (
  <div key={`Job_${props.id}`}>
    <span>{props.job}</span>
    <button value={props.id} onClick={props.deleteJob}>
    </button>
  </div>
);

export default Update;