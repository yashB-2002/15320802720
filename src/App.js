import "./App.css";
import HomePage from "./HomePage";
import { useState } from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [query, setQuery] = useState({});
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage setQuery={setQuery} />} />
        <Route path="/train" element={<SingleTrain query={query} />} />
      </Routes>
    </>
  );
}

export default App;
