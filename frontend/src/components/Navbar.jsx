import { Coffee } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout();
      response === undefined ? alert("Error") : navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {" "}
          <Link to={"/"}>
            <Coffee />
          </Link>{" "}
        </div>
        <div className="links">
          <Link to={"/?cat=code"}>
            <h6>CODE</h6>
          </Link>
          <Link to={"/?cat=tech"}>
            <h6>TECH</h6>
          </Link>
          <Link to={"/?cat=docs"}>
            <h6>DOCS</h6>
          </Link>
          <Link to={"/?cat=work"}>
            <h6>WORK</h6>
          </Link>

          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={handleLogout}>Logout</span> : <span><Link to={"/login"}>Login</Link></span>}
          <span className="write">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
