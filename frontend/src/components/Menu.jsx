const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title:
        "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam.",
      description:
        "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel ipsum commodi laboriosam voluptate quidem fugiat, cum voluptatibus consectetur ex officiis, dolorum numquam perspiciatis porro labore? Soluta sint odio minima.",
      img: "https://images.pexels.com/photos/5077042/pexels-photo-5077042.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="menu">
      <p>Others post you may like</p>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <div className="button-container">
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
