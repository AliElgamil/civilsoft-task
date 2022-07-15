import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ManageReq from "./Components/ManageReq/ManageReq";
import Request from "./Components/request/Request";
import { createContext, useEffect, useState } from "react";

export const RequestsContext = createContext(null);
function App() {
  const [requests, setRequests] = useState([]);
  const req = JSON.parse(localStorage.getItem("req"));

  useEffect(() => {
    if (req === null) setRequests([]);
    else setRequests(req);
  }, []);
  useEffect(() => {
    localStorage.setItem("req", JSON.stringify(requests));
  }, [requests]);

  return (
    <div className="App">
      <RequestsContext.Provider value={{ requests, setRequests }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ManageReq />} />
          <Route path="/request" element={<Request />} />
        </Routes>
        <Footer />
      </RequestsContext.Provider>
    </div>
  );
}

export default App;
