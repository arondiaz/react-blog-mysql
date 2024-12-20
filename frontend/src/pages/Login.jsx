import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [error, setError] = useState(null);

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
      const success = await login(user);
      success === undefined ? setError("Invalid username or password") : navigate("/");
    } catch (error) {
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
