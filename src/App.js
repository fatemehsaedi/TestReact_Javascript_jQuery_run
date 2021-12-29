import Home from "./components/Home";
import TestRoute from "./components/TestRoute";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/testRoute" element={<TestRoute />} />
    </Routes>
  );
}

export default App;
