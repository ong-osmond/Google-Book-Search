import React from "react";
import API from "../../utils/API";
import "./style.css";

function SaveBtn(props) {
  return (
    <div>
      <button
        type="primary"
        onClick={() => {
          API.saveBook(props).then(alert("Book has been saved!"));
        }}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Save Book
      </button>
    </div>
  );
}

export default SaveBtn;
