import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <p>Login failed!</p>
        <span>Don&apos;t have an account? <Link to={"/register"}>Register</Link></span>
      </form>
    </div>
  );
};

export default Login;
