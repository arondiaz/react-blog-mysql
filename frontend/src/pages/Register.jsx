import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
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
    const { username, email, password } = user;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Invalid Email");
    }

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return setError("Invalid credentials");
    }

    try {
      const url = `http://localhost:4040/api/auth/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          required
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
