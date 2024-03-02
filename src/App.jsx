import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LevelDisplayer from "./pages/LevelDisplayer/LevelDisplayer";
import AnimalSounds from "./pages/levels/AnimalSounds/AnimalSounds";
import { hawk2, howl2, oink1mp3 } from "../src/assets/sounds";
import MemoryGame from "./pages/levels/MemoryGame/MemoryGame";
import { Header } from "./components";
import PaintComponent from "./pages/levels/PaintComponent/PaintComponent";
function App() {
  const answerPig = "pig",
    answerHawk = "hawk",
    answerWolf = "wolf";
  const redirectPig = "/animal_w",
    redirectWolf = "/animal_h",
    redirectHawk = "/memory",
    redirectMemory = "/paint",
    redirectBrush = "/levels";
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/levels" Component={LevelDisplayer} />
        <Route
          path="/animal_p"
          Component={() => (
            <AnimalSounds
              sounds={oink1mp3}
              correctOption={answerPig}
              redirect={redirectPig}
            />
          )}
        />
        <Route
          path="/animal_w"
          Component={() => (
            <AnimalSounds
              sounds={howl2}
              correctOption={answerWolf}
              redirect={redirectWolf}
            />
          )}
        />
        <Route
          path="/animal_h"
          Component={() => (
            <AnimalSounds
              sounds={hawk2}
              correctOption={answerHawk}
              redirect={redirectHawk}
            />
          )}
        />
        <Route
          path="/memory"
          Component={() => <MemoryGame redirect={redirectMemory} />}
        ></Route>
        <Route
          path="/paint"
          Component={() => <PaintComponent redirect={redirectBrush} />}
        ></Route>
      </Routes>
    </>
  );
}
export default App;
