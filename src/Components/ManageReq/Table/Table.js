import React, { useContext } from "react";
import "./style.scss";
import TableBody from "./TableBody/TableBody";
export default function Table({ requests }) {
  return (
    <div className="table text-center">
      {/* Head Table */}
      <div className="table_head">
        <div className="table_row">
          <div className="table_cell"></div>
          <div className="table_cell">req no</div>
          <div className="table_cell">image</div>
          <div className="table_cell">code</div>
          <div className="table_cell">employee name</div>
          <div className="table_cell">job title</div>
          <div className="table_cell">salary profile</div>
          <div className="table_cell">expected leave start date</div>
          <div className="table_cell">expected rejoin start date</div>
          <div className="table_cell">actual leaving</div>
          <div className="table_cell">leave type 1</div>
        </div>
      </div>
      {/* /Head Table */}
      {/* Body table */}
      <div className="table_body">
        {requests.length ? (
          requests
            .map((req, ind) => <TableBody req={req} ind={ind} key={ind} />)
            .reverse()
        ) : (
          <p className="lead text-center py-3">No requests </p>
        )}
      </div>
      {/* Body table */}
    </div>
  );
}
