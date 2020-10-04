import React from "react";
import API from "../../utils/API";
import "./style.css";

function refreshPage() {
  window.location.reload();
}

function DeleteBtn(props) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          API.deleteBook(props.id).then(refreshPage());
        }}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-danger"
      >
        Delete Book
      </button>
    </div>
  );
}

export default DeleteBtn;
