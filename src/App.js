import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { homeSource, businessSource } from "./helpers/home-business-source";
import { homeCartegories, businessCartegories } from "./helpers/categorySource";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleHome from "./pages/home-business/SingleHome";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <SingleHome heroSource={homeSource} categories={homeCartegories} />
          }
        />
        <Route
          path="/business"
          element={
            <SingleHome
              heroSource={businessSource}
              categories={businessCartegories}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
