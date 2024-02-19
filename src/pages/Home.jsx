import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import PiggiesLayout from "../components/PiggiesLayout/PiggiesLayout";
import GameMenu from "../components/GameMenu/GameMenu";

function Home() {
  return (
    <>
      <Header></Header>
      <GameMenu></GameMenu>
    </>
  );
}

export default Home;
