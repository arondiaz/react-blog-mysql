import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

          <span>username</span>
          <span>logout</span>
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
