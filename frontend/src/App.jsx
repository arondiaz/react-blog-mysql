import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import "./style.scss";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/write"} element={<Write />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
