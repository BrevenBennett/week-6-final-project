import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MovieData from "./pages/MovieData";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:imdbID" element={<MovieData />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
