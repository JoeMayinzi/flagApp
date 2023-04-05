import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Africa from "./components/pages/Africa";
import America from "./components/pages/America";
import Asia from "./components/pages/Asia";
import Europa from "./components/pages/Europa";
import FlagGame from "./components/pages/FlagGame";
import Oceania from "./components/pages/Oceania";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Africa" element={<Africa />} />
      <Route path="/Americas" element={<America />} />
      <Route path="/Asia" element={<Asia />} />
      <Route path="/Europe" element={<Europa />} />
      <Route path="/Oceania" element={<Oceania />} />
      <Route path="/FlagGame" element={<FlagGame />} />
    </Routes>
  );
}

export default App;
