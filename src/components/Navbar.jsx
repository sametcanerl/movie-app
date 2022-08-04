import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          React Movie App
        </Link>

        <div>
          <button
            className="me-2 btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="me-2 btn btn-secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
