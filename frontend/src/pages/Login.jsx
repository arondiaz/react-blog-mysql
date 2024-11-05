import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;

    if (username.trim() === "" || password.trim() === "") {
      return setError("Invalid credentials");
    }

    try {
      const url = `http://localhost:4040/api/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p> {error} </p>}
        <span>
          Don&apos;t have an account? <Link to={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
