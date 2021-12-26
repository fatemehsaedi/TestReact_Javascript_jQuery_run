import Home from "./components/Home";
import TestRoute from "./components/TestRoute";
import { Route, Routes } from "react-router-dom";
// import { Switch} from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/testRoute" element={<TestRoute />} />
      {/* <Route path="/explore" component={Explore} /> */}
    </Routes>
  );
}

export default App;
