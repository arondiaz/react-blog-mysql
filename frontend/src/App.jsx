import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import "./style.scss";
import Footer from "./components/Footer";
import Single from "./pages/Single";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/post/:id"} element={<Single />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/write"} element={<Write />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
