import { Link, useLocation } from "react-router-dom";
import { Settings, Trash } from "lucide-react";
import Menu from "../components/Menu";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import AuthContext from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const { currentUser } = useContext(AuthContext);

  const location = useLocation();

  let postId = location.pathname.split("/")[2];

  useEffect(() => {
    const url = `http://localhost:4040/api/post/${postId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  const user = post[0];
  return (
    <div className="single">
      <div className="content">
        <img src={user?.img} alt="" />
        <div className="user">
          <img src={user?.userImg} alt="" />
          <div className="info">
            <span>{user?.username}</span>
            <p>posted {moment(user?.date).fromNow}</p>
          </div>
          {currentUser?.username === user?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <Settings />
              </Link>
              <Trash />
            </div>
          )}
        </div>
        <h1>{user?.title}</h1>
        <p>{user?.description}</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
