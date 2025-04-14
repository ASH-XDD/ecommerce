import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/"); // redirect to home page or login page
    } catch (error) {
      console.error("Error registering user:", error.message);
      alert("Registration failed. Check console for error.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa", // optional light background
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center shadow p-4 bg-white rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="mb-4">Register</h2>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="w-100">
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <div className="d-flex justify-content-between w-100 mt-3">
          <button onClick={() => navigate("/login")} className="btn btn-link p-0">
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}
