import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameList from "./components/GameList";
import Play from "./pages/Play";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<GameList />} />

        <Route path="/play" element={<Play />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;