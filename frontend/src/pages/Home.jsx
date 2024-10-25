import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam.",
      description: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h3>{post.title}</h3>

              </Link>
              <p>{post.description}</p>

              <Link className="link" to={`/post/${post.id}`}>

              <button>Read More</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

