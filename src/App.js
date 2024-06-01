import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
