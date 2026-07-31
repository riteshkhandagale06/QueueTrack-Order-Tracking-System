import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Temporary Login
    if (
      email === "owner@burgerking.com" &&
      password === "123456"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          QueueTrack
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Outlet Owner Login
        </p>

        <form
          className="mt-8"
          onSubmit={handleLogin}
        >

          <label className="font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="owner@burgerking.com"
            className="w-full mt-2 border rounded-lg p-3 mb-5"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full mt-2 border rounded-lg p-3"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="w-full bg-blue-600 text-white mt-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default OwnerLogin;