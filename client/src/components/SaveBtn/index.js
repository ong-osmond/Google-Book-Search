import React from "react";
//import "./style.css";

function SaveBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
          {props.children}
        </button>
      );
    
}

export default SaveBtn;