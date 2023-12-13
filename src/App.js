import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MovieData from "./pages/MovieData";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:imbdID" element={<MovieData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
