import Nav from "./components/Nav";
import { Crew, Destination, Home, Technology } from "./routes/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index="true" element={<Home />} />
        <Route path="/Space-tourism-multi-page-website/" element={<Home />} />
        <Route
          path="/Space-tourism-multi-page-website/destination/"
          element={<Destination />}
        />
        <Route
          path="/Space-tourism-multi-page-website/crew"
          element={<Crew />}
        />
        <Route
          path="/Space-tourism-multi-page-website/technology"
          element={<Technology />}
        />
      </Routes>
    </div>
  );
}

export default App;
