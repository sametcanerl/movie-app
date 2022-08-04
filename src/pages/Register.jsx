import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="form-container bg-secondary">
      <form className="bg-dark">
        <div className="mb-3">
          <label for="firstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
