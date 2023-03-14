import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Africa from "./components/pages/Africa";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/africa" element={<Africa />} />
    </Routes>
  );
}

export default App;
