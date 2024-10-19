import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" required placeholder="email" />
        <input type="text" required placeholder="username" />
        <input type="text" required placeholder="password" />
        <button>Register</button>
        <p>Register failed!</p>
        <span>
          Do you have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
