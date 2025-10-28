import { useState } from "react";
import { auth } from "../../../config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User signed up:", user.email);
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Signup Error:", error.message);
      });
  };

  return (
    <div className="flex items-center mt-28 justify-center min-h-[70vh]">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={userData.email}
          onChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
