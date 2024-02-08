import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import PiggiesLayout from "../components/PiggiesLayout/PiggiesLayout";

function Home() {
  return (
    <>
      <Header></Header>
      <PiggiesLayout></PiggiesLayout>
    </>
  );
}

export default Home;
