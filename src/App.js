import React from "react";
import "./App.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Form, ImgMap } from "./Components";

function App() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Tabs value={value} onChange={handleChange}>
            <Link to="/map">
              <Tab value="one" label="Tast 1" className="tab" />
            </Link>
            <Link to="/form">
              <Tab value="two" label="Tast 2" className="tab" />
            </Link>
          </Tabs>
          <Routes>
            <Route path="/map" element={<ImgMap />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
