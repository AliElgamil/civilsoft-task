import React, { useContext, useRef, useState } from "react";
import { RequestsContext } from "../../../App";
export default function FilterForm({ setRequests }) {
  const { requests } = useContext(RequestsContext);
  const [check, setCheck] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputSearch = useRef(null);
  const handleSearch = () => {
    // let filter;
    // clearTimeout(filter);
    // filter = setTimeout(() => {
    const filterData = requests.filter(
      (req) =>
        req.code.toString().indexOf(inputSearch.current.value) !== -1 ||
        req.name.indexOf(inputSearch.current.value) !== -1 ||
        req.jobTitle.indexOf(inputSearch.current.value) !== -1
    );

    setCheck(!filterData.length);
    setRequests([...filterData]);
    // }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="form_filter d-grid gap-3">
      <div className="icon">
        <i className="fa-solid fa-earth-americas"></i>
      </div>
      <div className="input d-grid px-2">
        <input
          type="text"
          placeholder="Search Employee Name, Code or Job Title"
          ref={inputSearch}
          onKeyUp={handleSearch}
        />
        <button className="pe-0">
          <i
            className={`fa-solid fa-rotate-left ${
              check ? "text-danger" : "text-success"
            }`}
          ></i>
        </button>
      </div>
      <button type="submit" className="icon icon_search">
        <i className={`fa-solid fa-magnifying-glass `}></i>
      </button>
    </form>
  );
}
