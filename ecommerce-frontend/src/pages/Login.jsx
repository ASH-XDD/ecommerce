import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/"); // redirect to home
    } catch (error) {
      console.error("Error signing in with email:", error.message);
      alert("Login failed. Check console for error.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User:", result.user);
      alert("Login successful!");
      navigate("/"); // redirect to home
    } catch (error) {
      console.error("Google Sign-in Error:", error.message);
      alert("Login failed. Check console for error.");
    }
  };

  const navigateToRegister = () => {
    navigate("/register"); // redirect to the register route
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
        <h2 className="mb-4">Login</h2>

        {/* Email/Password Login */}
        <form onSubmit={handleEmailLogin} className="w-100">
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
            Sign in with Email
          </button>
        </form>

        {/* Google Login */}
        <button onClick={handleGoogleLogin} className="btn btn-danger w-100 mb-3">
          Sign in with Google
        </button>

        {/* Redirect to Register */}
        <div className="d-flex justify-content-between w-100 mt-3">
          <button onClick={navigateToRegister} className="btn btn-link p-0">
            Register with Email
          </button>
          <button onClick={navigateToRegister} className="btn btn-link p-0">
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
}
