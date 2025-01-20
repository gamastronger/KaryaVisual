import { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import background from "../../assets/background.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
      <div className="p-8 w-full max-w-3xl mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-10">
          Let’s Sign Up
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Enter your details to continue
        </p>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
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
            <div>
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

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Phone Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4">
                <FiPhone className="text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Address Input */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4">
                <FiMapPin className="text-gray-500" />
                <input
                  type="text"
                  id="address"
                  placeholder="Your Address"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
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

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4">
                <FiLock className="text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm Your Password"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="focus:outline-none"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Register and Forgot Password Links */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-[#4E47FF] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
