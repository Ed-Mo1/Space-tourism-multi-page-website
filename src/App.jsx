import Nav from "./components/Nav";
import { Crew, Destination, Home, Technology } from "./routes/index";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
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
      </AnimatePresence>
    </>
  );
}

export default App;
