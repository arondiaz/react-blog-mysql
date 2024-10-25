import { Link } from "react-router-dom";
import { Settings, Trash } from "lucide-react";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/16516/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/28065063/pexels-photo-28065063/free-photo-of-creativo-azul-festivo-fiesta.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt=""
          />
          <div className="info">
            <span>Pepe</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <Settings />
            </Link>
            <Trash />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, natus. Fugit error corporis maxime perspiciatis</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quas consequatur suscipit commodi molestias ipsam quod natus non quasi ratione. Quod in natus ducimus, fugiat placeat tempore porro deleniti illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut dolores esse aspernatur voluptate fugiat sunt. Quisquam rem vitae est dolorum odio similique et ipsa, culpa delectus veniam maiores distinctio.
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
