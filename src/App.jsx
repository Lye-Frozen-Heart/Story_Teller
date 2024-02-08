import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
    </Routes>
  );
}

export default App;
