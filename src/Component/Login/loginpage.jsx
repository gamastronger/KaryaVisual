import { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from "react-icons/fi";
import background from "../../assets/bglogin.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-8 w-full max-w-md mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Let’s Sign In
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Enter your details to continue
        </p>
        <form>
          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiUser className="text-gray-500" />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiMail className="text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiLock className="text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your Password"
                className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-500" />
                ) : (
                  <FiEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register and Forgot Password Links */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
