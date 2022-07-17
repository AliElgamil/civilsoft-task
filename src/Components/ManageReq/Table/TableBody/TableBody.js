import React, { useRef, useState, useContext, useEffect } from "react";
import { RequestsContext } from "../../../../Context/Context";
import Color from "./Color";
export default function TableBody({ req, ind }) {
  const { requests, setRequests } = useContext(RequestsContext);
  const [select, setSelect] = useState(requests[ind]?.select);
  const handleClick = () => {
    requests[ind].select = !select;
    setSelect(!select);
  };

  useEffect(() => {}, []);

  const indexOb = ind;

  const input1 = useRef(req.startDate);
  const input2 = useRef(req.startDate);
  const input3 = useRef(req.startDate);
  const input4 = useRef(req.startDate);

  const handleInput1 = () => {
    requests[ind].startDate = input1.current.value;

    setRequests(requests);
  };

  const handleInput2 = () => {
    requests[ind].endDate = input2.current.value;

    setRequests(requests);
  };

  const handleInput3 = () => {
    requests[ind].actualDate = input3.current.value;

    setRequests(requests);
  };

  const handleInput4 = () => {
    requests[ind].leaveType = input4.current.value;

    setRequests(requests);
  };

  const reqList = () => {
    return (
      <div
        className={`table_row ${requests[ind]?.select ? "select" : null}`}
        onClick={() => handleClick()}
      >
        <div className={`table_cell bg-${req.reqType}`}></div>
        <div className="table_cell">{req.reqNum}</div>
        <div className="table_cell">
          <img src={req.imgUrl} alt="person" className="img-fluid" />
        </div>
        <div className="table_cell">{req.code}</div>
        <div className="table_cell">{req.name}</div>
        <div className="table_cell">{req.jobTitle}</div>
        <div className="table_cell">{req.salaryProfile}</div>
        <div className="table_cell">{req.startDate}</div>
        <div className="table_cell">{req.endDate}</div>
        <div className="table_cell">{req.actualDate}</div>
        <div className="table_cell">{req.leaveType}</div>
      </div>
    );
  };

  const bgColor = [
    "rl",
    "ua",
    "fla ",
    "at",
    "ct",
    "fdt",
    "r",
    "h",
    "rah",
    "elr",
  ];

  const reqForm = () => {
    return (
      <div className={`table_row ${requests[ind].select ? "select" : null}`}>
        <div className={`table_cell bg-${req.reqType}`}>
          <ul className="list-unstyled d-flex gap-2 p-2 list-color">
            {bgColor.map((color, ind) => (
              <Color
                color={color}
                ind={ind}
                colorList={bgColor}
                indexOb={indexOb}
                requests={requests}
                setRequests={setRequests}
                key={ind}
              />
            ))}
          </ul>
        </div>
        <div className="table_cell">{req.reqNum}</div>
        <div className="table_cell">
          <img src={req.imgUrl} alt="person" className="img-fluid" />
        </div>
        <div className="table_cell">{req.code}</div>
        <div className="table_cell">{req.name}</div>
        <div className="table_cell">{req.jobTitle}</div>
        <div className="table_cell">{req.salaryProfile}</div>
        <div className="table_cell">
          <input
            type="text"
            defaultValue={req.startDate}
            ref={input1}
            onChange={() => handleInput1()}
          />
        </div>
        <div className="table_cell">
          <input
            type="text"
            defaultValue={req.endDate}
            ref={input2}
            onChange={() => handleInput2()}
          />
        </div>
        <div className="table_cell">
          <input
            type="text"
            defaultValue={req.actualDate}
            ref={input3}
            onChange={() => handleInput3()}
          />
        </div>
        <div className="table_cell">
          <input
            type="text"
            defaultValue={req.leaveType}
            ref={input4}
            onChange={() => handleInput4()}
          />
        </div>
      </div>
    );
  };

  return !req.edit ? reqList() : reqForm();
}
