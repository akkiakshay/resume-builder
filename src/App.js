import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ViewResume,Dashboard } from "./pages/";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          {/* <Route path="/view" element={ViewResume} /> */}
          <Route path="/view" element={<ViewResume/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
