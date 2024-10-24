import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Link>
        <Coffee />
      </Link>
      <span>building..</span>
    </footer>
  );
};

export default Footer;
