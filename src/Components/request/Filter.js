import React from "react";

export default function Filter({
  emp,
  ind,
  setEmployee,
  employeeFilter,
  setEmployeeFilter,
}) {
  const handleListItem = () => {
    setEmployee(employeeFilter[ind]);
    setEmployeeFilter([]);
  };

  return (
    <li className="list_item" onClick={handleListItem}>
      <div className="image">
        <img src="./images/person.jpg" className="img-fluid" alt="person" />
      </div>
      <div className="info">
        <p className="m-0">
          <span>{emp.code}</span> || <span>{emp.name}</span>
        </p>
        <p className="m-0">{emp.jopTitle}</p>
      </div>
    </li>
  );
}
