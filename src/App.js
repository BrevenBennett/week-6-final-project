import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
