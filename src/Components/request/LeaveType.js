import React, { useRef } from "react";

export default function LeaveType({ ind, setLeaveType, leaveType, employee }) {
  const select = useRef(null);
  const number = useRef(null);

  const handleInput = () => {
    const newLeaveType = [...leaveType];

    newLeaveType[ind].leaveType = select.current.value;
    newLeaveType[ind].days = number.current.value;

    setLeaveType(newLeaveType);
  };

  return (
    <div className="row gap-3 gap-sm-0">
      <div className="col-lg-6 d-flex justify-content-center gap-3 flex-wrap">
        <label>{ind + 1}st Leave Type</label>
        <select
          ref={select}
          onChange={handleInput}
          disabled={!employee}
          defaultValue={leaveType[ind].leaveType}
        >
          <option disabled>--Please select leave type</option>
          <option>annul leave with payroll</option>
          <option>Sick Leave</option>
          <option>annul leave During reserve</option>
        </select>
      </div>
      <div className="col-lg-6 d-flex justify-content-center gap-3 flex-wrap">
        <label>No. of Days</label>
        <input
          type="text"
          placeholder="Enter number"
          ref={number}
          onChange={() => handleInput()}
          disabled={!employee}
          defaultValue={leaveType[ind].days}
        />
      </div>
    </div>
  );
}
