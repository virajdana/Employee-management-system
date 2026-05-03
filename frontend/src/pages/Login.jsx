import axios from "axios";
import React, { useState } from "react";
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom' // ✅ correct import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate() // ✅ fixed typo

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        if(response.data.success){
          login(response.data.user);
          localStorage.setItem("token", response.data.token);

          if (response.data.user.role === "admin") {
              navigate('/admin-dashboard')
          } else {
              navigate('/employee-dashboard')
          }
        }

    } catch (error) {
        if(error.response && !error.response.data.success){
          setError(error.response.data.error)
        } else {
          setError("Server Error")
        }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50%">
      
      <h2 className="text-3xl font-bold text-white mb-6">
        Employee Management System
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="mb-4 flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded transition duration-200"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
