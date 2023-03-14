import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Africa from "./components/pages/Africa";
import America from "./components/pages/America";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/africa" element={<Africa />} />
      <Route path="/america" element={<America />} />
    </Routes>
  );
}

export default App;
