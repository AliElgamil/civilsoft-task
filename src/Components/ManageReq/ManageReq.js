import React, { useContext, useEffect, useState } from "react";
import FilterForm from "./FilterForm/FilterForm";
import Table from "./Table/Table";
import ToolsEdit from "./ToolsEdit/ToolsEdit";
import "./style.scss";
import { RequestsContext, Filter } from "../../Context/Context";
import Symptoms from "./Symptoms/Symptoms";

export default function ManageReq() {
  const { requests } = useContext(RequestsContext);
  const [requestsFilter, setRequestsFilter] = useState(requests);

  useEffect(() => {
    setRequestsFilter(requests);
  }, [requests]);

  return (
    <div className="manage_req">
      <div className="head_section d-flex justify-content-sm-between justify-content-center align-items-center flex-wrap p-2 text-center mb-3">
        <h5 className="head_title text-capitalize col-12 col-sm-6 text-sm-start m-0">
          manage leave requests
        </h5>
        <h6 className="head_subtitle col-12 col-sm-6 text-sm-end  m-0">
          You have {requests.length} Application(s)
        </h6>
      </div>

      <div className="tools d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap p-2 text-center  gap-3">
        <FilterForm setRequests={setRequestsFilter} />
        <ToolsEdit requests={!requestsFilter.length ? [] : requestsFilter} />
        <Table requests={!requestsFilter.length ? [] : requestsFilter} />
        <Symptoms />
      </div>
    </div>
  );
}
