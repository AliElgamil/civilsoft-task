import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LeaveType from "./LeaveType";
import data from "./data/employes.json";
import "./style.scss";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import { RequestsContext } from "../../Context/Context";

export default function Request() {
  const [inputFileValue, setInputFileValue] = useState("");
  const [employee, setEmployee] = useState(null);
  const [employeeFilter, setEmployeeFilter] = useState([]);
  const [Error, setError] = useState(false);
  const [Day, setDay] = useState(0);
  const [leaveType, setLeaveType] = useState([{ leaveType: "", days: "" }]);
  const navigate = useNavigate();
  const { requests, setRequests } = useContext(RequestsContext);

  useEffect(() => {
    let counter = [];
    const setT = setTimeout(() => {
      setDay(0);
      leaveType.map((type) => counter.push(type.days));

      setDay(counter.reduce((a, b) => +a + +b, 0));
    }, 500);

    return () => {
      clearTimeout(setT);
    };
  }, [leaveType]);

  const inputFile = useRef("");
  const inputRadio1 = useRef(null);
  const inputRadio2 = useRef(null);
  const inputRadio3 = useRef(null);
  const inputRadio4 = useRef(null);
  const inputDate1 = useRef(null);
  const inputDate2 = useRef(null);
  const inputDate3 = useRef(null);
  const inputSelect1 = useRef(null);
  const inputSelect2 = useRef(null);
  const address = useRef(null);
  const contact = useRef(null);
  const email = useRef(null);
  const remarks = useRef(null);
  const inputSearch = useRef(null);

  const handleBtnAdd = (e) => {
    e.preventDefault();
    setLeaveType([...leaveType, {}]);
  };

  const handelForm = (e) => {
    e.preventDefault();
  };

  const handelInputFile = () => {
    setInputFileValue(inputFile.current.value.split("\\")[2]);
  };

  const handleSearch = () => {
    let filter;
    clearTimeout(filter);
    filter = setTimeout(() => {
      const filterData = data.filter((emp) => {
        return (
          emp.code.toString().indexOf(inputSearch.current.value) !== -1 ||
          emp.name.indexOf(inputSearch.current.value) !== -1 ||
          emp.jobTitle.indexOf(inputSearch.current.value) !== -1
        );
      });
      setEmployeeFilter(filterData);
    }, 500);
  };

  const handleResetSearch = () => {
    setEmployeeFilter([]);
  };

  const handleSubmit = () => {
    if (
      !inputRadio1.current.value ||
      !inputRadio2.current.value ||
      !inputRadio3.current.value ||
      !inputRadio4.current.value ||
      !inputDate1.current.value ||
      !inputDate2.current.value ||
      !inputDate3.current.value ||
      !inputSelect2.current.value ||
      !address.current.value ||
      !contact.current.value ||
      !email.current.value
    ) {
      console.log(
        inputRadio1.current.value,
        inputRadio2.current.value,
        inputRadio3.current.value,
        inputRadio4.current.value,
        inputDate1.current.value,
        inputDate2.current.value,
        inputDate3.current.value,
        inputSelect2.current.value,
        address.current.value,
        contact.current.value
      );
      setError(true);
      return;
    }

    const getReqNum = localStorage.getItem("reqNum");

    const req = {
      reqNum: +getReqNum + 1 || 1,
      imgUrl: employee?.imgUrl,
      code: employee?.code,
      name: employee?.name,
      jobTitle: employee?.jobTitle,
      salaryProfile: employee?.salaryProfile,
      startDate: inputDate1.current.value,
      endDate: inputDate2.current.value,
      actualDate: inputDate3.current.value,
      leaveType: leaveType[0].leaveType,
      reqType: "rl",
      edit: false,
      select: false,
    };

    localStorage.setItem("reqNum", req.reqNum);

    const getLocalStorageData = JSON.parse(localStorage.getItem("req"));

    const dataReq =
      getLocalStorageData === null
        ? JSON.stringify([req])
        : JSON.stringify([...getLocalStorageData, req]);
    localStorage.setItem("req", dataReq);
    setRequests([...requests, req]);
    navigate("/");
  };

  const handleError = () => {
    setError(false);
  };

  return (
    <div className="request">
      <div className="head_section d-flex justify-content-sm-between justify-content-center align-items-center flex-wrap p-2 text-center mb-1">
        <h5 className="head_title text-capitalize col-12 col-sm-6 text-sm-start m-0">
          post leave request
        </h5>
        <h6 className="head_subtitle col-12 col-sm-6 text-sm-end text-capitalize m-0">
          <i className="fa-solid fa-flag me-2"></i>request no.
        </h6>
      </div>

      {Error ? (
        <div className="error" onClick={handleError}>
          <p className="color-danger">
            <i className="fa-solid fa-circle-exclamation"></i> Some Input is
            Empty
          </p>
        </div>
      ) : null}

      <div className="row align-items-start p-3 gap">
        <div className="col-lg-8">
          <div className="info">
            <div className="head_box d-flex gap-3">
              <div className="icon">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
              <form onSubmit={handelForm} className="form_filter">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Search Employee Name, Code or Job Title"
                    onChange={handleSearch}
                    ref={inputSearch}
                  />
                </div>
                <button onClick={handleResetSearch}>
                  {!employeeFilter.length ? (
                    <i className="fa-solid fa-rotate-left"></i>
                  ) : (
                    <i className="fa-solid fa-x"></i>
                  )}
                </button>
                <ul
                  className={`list-unstyled list_emp ${
                    !employeeFilter.length ? "hide" : null
                  }`}
                >
                  {employeeFilter.map((emp, ind) => (
                    <Filter
                      emp={emp}
                      ind={ind}
                      setEmployee={setEmployee}
                      employeeFilter={employeeFilter}
                      setEmployeeFilter={setEmployeeFilter}
                      key={ind}
                    />
                  ))}
                </ul>
              </form>
            </div>
            <div className="info_details d-flex">
              <div className="image">
                <img
                  src="./images/person.jpg"
                  alt="person"
                  className="img-fluid"
                />
              </div>
              <ul className="list-unstyled info_list">
                <li className="info_item">
                  <p className="fw-bold m-0">
                    <span className="fw-normal">{employee?.code}</span>
                    {!employee ? null : " || "} {employee?.name}
                  </p>
                </li>
                <li className="info_item">
                  <span className="fw-bold">Job Title</span>
                  <span>{employee?.jobTitle}</span>
                </li>
                <li className="info_item">
                  <span className="fw-bold">Salary Profile</span>
                  <span>{employee?.salaryProfile}</span>
                </li>
                <li className="info_item">
                  <span className="fw-bold">Joining Date</span>
                  <span>{employee?.joiningData}</span>
                </li>
                <li className="info_item">
                  <span className="fw-bold">Location </span>
                  <span>
                    {employee?.location.map((item, ind) => {
                      return (
                        <span key={ind}>
                          {item}
                          {ind !== employee?.location.length - 1 ? (
                            <i className="fa-solid fa-chevron-right"></i>
                          ) : null}
                        </span>
                      );
                    })}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <form className="req_form">
            <div className="form_container">
              <h5 className="title_form">Leave Details</h5>

              <div className="row gap">
                <div className="col-12">
                  <div className="input d-flex gap-2">
                    <span>Leave to Avail</span>
                    <div>
                      <input
                        type="radio"
                        id="input1"
                        name="leave"
                        ref={inputRadio1}
                        disabled={!employee}
                      />
                      <label htmlFor="input1">Abroad</label>
                      <input
                        type="radio"
                        id="input2"
                        name="leave"
                        defaultChecked
                        ref={inputRadio2}
                        disabled={!employee}
                      />
                      <label htmlFor="input2">Local</label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input d-flex gap-2">
                    <span>Require Leave Salary Advance</span>
                    <div>
                      <input
                        type="radio"
                        id="input3"
                        name="salary"
                        ref={inputRadio3}
                        disabled={!employee}
                      />
                      <label htmlFor="input3">Yes</label>
                      <input
                        type="radio"
                        id="input4"
                        name="salary"
                        defaultChecked
                        ref={inputRadio4}
                        disabled={!employee}
                      />
                      <label htmlFor="input4">No</label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input d-flex gap-2">
                    <span>Expected Leaving Date</span>
                    <input type="date" ref={inputDate1} disabled={!employee} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input d-flex gap-2">
                    <span>Expected Rejoin Date</span>
                    <input type="date" ref={inputDate2} disabled={!employee} />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input d-flex gap-2">
                    <span>Expected End Date</span>
                    <input type="date" ref={inputDate3} disabled={!employee} />
                  </div>
                </div>

                {/* Days */}
                <div className="col-12">
                  <div className="leave_type">
                    <div className="d-flex flex-column gap-2">
                      {leaveType.map((type, ind) => (
                        <LeaveType
                          ind={ind}
                          leaveType={leaveType}
                          setLeaveType={setLeaveType}
                          employee={employee}
                          key={ind}
                        />
                      ))}
                    </div>
                    <div className="mx-auto btn_add">
                      <button className="btn" onClick={handleBtnAdd}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <p className="m-0 pt-2 text-center">
                      {Day ? Day : null}
                      <i className="fa-solid fa-calendar-check mx-2"></i>
                      Total Days
                    </p>
                  </div>
                </div>
                {/* Days */}

                <div className="col-lg-6">
                  <div className="box">
                    <div className="head_box">
                      <h5>Guarantor</h5>
                    </div>
                    <div className="input">
                      {!employee ? (
                        <select ref={inputSelect1} disabled={!employee}>
                          <option>select an Option</option>
                        </select>
                      ) : (
                        <p className="m-0 color-danger text-center">
                          <i className="fa-solid fa-circle-exclamation me-2"></i>{" "}
                          No Guarantor
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box">
                    <div className="head_box">
                      <h5>Replacement</h5>
                    </div>
                    <div className="input">
                      <select ref={inputSelect2} disabled={!employee}>
                        <option>select an Option</option>
                        <option>1</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="box">
                    <div className="head_box">
                      <h5>Contact Details During Leave</h5>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input d-flex gap-3">
                          <label>Address</label>
                          <input
                            type="text"
                            ref={address}
                            disabled={!employee}
                          />
                        </div>
                        <div className="input d-flex gap-3 ">
                          <label>Email</label>
                          <input
                            type="email"
                            ref={email}
                            disabled={!employee}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input d-flex gap-3 ">
                          <label>Contact No.</label>
                          <input
                            type="text"
                            ref={contact}
                            disabled={!employee}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row my-3 gap">
              <div className="col-lg-6">
                <div className="box">
                  <div className="head_box">
                    <h5>Remarks</h5>
                  </div>
                  <div className="input">
                    <textarea
                      className="w-100"
                      rows="3"
                      ref={remarks}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <div className="head_box">
                    <h5>Attachment</h5>
                  </div>
                  <div className="input d-flex gap-2 align-items-center flex-wrap">
                    <div className="input-container ">
                      <input
                        type="file"
                        id="input_file"
                        ref={inputFile}
                        onChange={handelInputFile}
                      />
                      {inputFileValue}
                    </div>
                    <label htmlFor="input_file">
                      <i className="fa-solid fa-paperclip"></i>
                    </label>
                    <p className="w-100">
                      <i className="fa-solid fa-circle-info"></i>
                      Max File Size 1MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="leave_details">
            <h6 className="fw-bold">
              Annual Leave Balance as on thu, May 06,2021
            </h6>
            <p className="fw-bold m-0">Annual Leave</p>
            <ul className="list-unstyled list">
              <li className="list-item">
                <span>Annual Leave Entitlement</span>
                <span>{!employee ? null : "30 Days Every 365 Days"}</span>
              </li>
              <li className="list-item">
                <span>Annual Leave Balance</span>
                <span>{employee?.annualLeaveBalance} Day(s)</span>
              </li>
              <li className="list-item">
                <span>Al Bal Till Year End</span>
                <span>{!employee ? null : 0} Day(s)</span>
              </li>
            </ul>
            <p className="fw-bold m-0">Extra Days</p>
            <ul className="list-unstyled list">
              <li className="list-item">
                <span>Extra Days Balance</span>
                <span>{employee?.extraDays} Day(s)</span>
              </li>
            </ul>
            <p className="fw-bold m-0">Sick Leave</p>
            <ul className="list-unstyled list">
              <li className="list-item">
                <span>Sick Leave(s) Taken</span>
                <span>{!employee ? null : 0} Day(s)</span>
              </li>
            </ul>
            <p className="fw-bold m-0">Unpaid Leaves</p>
            <ul className="list-unstyled list">
              <li className="list-item">
                <span>Unpaid Leave Taken</span>
                <span>{employee?.unpaidLeaveTaken} Day(s)</span>
              </li>
            </ul>
            <p className="fw-bold m-0">Leave in Progress</p>
            <ul className="list-unstyled list">
              <li className="list-item">
                <span>Annual Leave</span>
                <span>{!employee ? null : 0}Day(s)</span>
              </li>
              <li className="list-item">
                <span>Extra Days</span>
                <span>{!employee ? null : 0}Day(s)</span>
              </li>
              <li className="list-item">
                <span>Sick Leaves</span>
                <span>{!employee ? null : 0}Day(s)</span>
              </li>
              <li className="list-item">
                <span>Unpaid Leaves</span>
                <span>{!employee ? null : 0}Day(s)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="btn-group mt-4 mb-3  mx-auto">
          <Link className="btn btn-cancel" to="/">
            Cancel
          </Link>
          <button className="btn" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
