import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RequestsContext } from "../../../App";
export default function ToolsEdit() {
  const { requests, setRequests } = useContext(RequestsContext);
  const handleClickEdit = () => {
    const req = requests.map((reqV) => {
      if (reqV.select) {
        reqV.edit = true;
        reqV.select = true;
      }

      return reqV;
    });
    setRequests(req);
  };
  const handleClickView = () => {
    const req = requests.map((reqV) => {
      reqV.edit = false;
      reqV.select = false;
      return reqV;
    });

    setRequests(req);
  };

  const handleSelectAll = () => {
    const req = requests.map((reqV) => {
      reqV.select = !reqV.select;
      return reqV;
    });

    setRequests(req);
  };

  const handleDelete = () => {
    const req = requests.filter((reqV) => !reqV.select);
    setRequests(req);
  };

  return (
    <ul className="list-unstyled list-option d-flex m-0">
      <li className="option-item">
        <Link to="/request">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </li>
      <li className="option-item" onClick={() => handleClickEdit()}>
        <i className="fa-solid fa-pen-to-square"></i>
      </li>
      <li className="option-item" onClick={() => handleClickView()}>
        <i className="fa-solid fa-eye"></i>
      </li>
      <li className="option-item" onClick={() => handleSelectAll()}>
        <span>
          <i className="fa-solid fa-square-check"></i>
        </span>
      </li>
      <li className="option-item" onClick={() => handleDelete()}>
        <i className="fa-solid fa-trash-can"></i>
      </li>
      <li className="option-item">
        <i className="fa-solid fa-print"></i>
      </li>
      <li className="option-item">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </li>
    </ul>
  );
}
