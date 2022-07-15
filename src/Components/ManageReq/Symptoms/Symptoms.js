import React from "react";

function Symptoms() {
  return (
    <ul className="symptoms_list d-flex flex-wrap gap-2 list-unstyled fw-bold">
      <li className="list-item">
        <span className="bg-rl"></span>
        <span>Request Level</span>
      </li>
      <li className="list-item">
        <span className="bg-ua"></span>
        <span>Under approval</span>
      </li>
      <li className="list-item">
        <span className="bg-fla"></span>
        <span>Final level approved</span>
      </li>
      <li className="list-item">
        <span className="bg-at"></span>
        <span>
          Action taken (Leaving is posted and approved or Leave extension)
        </span>
      </li>
      <li className="list-item">
        <span className="bg-ct"></span>
        <span>Closed transaction</span>
      </li>
      <li className="list-item">
        <span className="bg-fdt"></span>
        <span>Future Dated transaction</span>
      </li>
      <li className="list-item">
        <span className="bg-r"></span>
        <span>Returned</span>
      </li>
      <li className="list-item">
        <span className="bg-h"></span>
        <span>Hold</span>
      </li>
      <li className="list-item">
        <span className="bg-rah"></span>
        <span>Returned and On Hold</span>
      </li>
      <li className="list-item">
        <span className="bg-elr"></span>
        <span>Extended Leave Request</span>
      </li>
    </ul>
  );
}

export default Symptoms;
