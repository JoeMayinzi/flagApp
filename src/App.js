import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Africa from "./components/pages/Africa";
import America from "./components/pages/America";
import Asia from "./components/pages/Asia";
import Europa from "./components/pages/Europa";
import Oceania from "./components/pages/Oceania";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/africa" element={<Africa />} />
      <Route path="/america" element={<America />} />
      <Route path="/asia" element={<Asia />} />
      <Route path="/europe" element={<Europa />} />
      <Route path="/oceania" element={<Oceania />} />
    </Routes>
  );
}

export default App;
