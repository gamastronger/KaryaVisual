import { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiCheck } from "react-icons/fi";
import background from "../../assets/bglogin.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [notification, setNotification] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Simulate successful login
      console.log('Form Submitted');
      setNotification('Login Successful!');

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
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
      {/* Notifikasi - Posisi di tengah layar */}
      {notification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
          <FiCheck className="text-green-600 w-6 h-6" />
          {notification}
        </div>
      )}

      {/* Notifikasi - Posisi di sudut kanan atas */}
      {/* {notification && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
          <FiCheck className="text-green-600 w-6 h-6" />
          {notification}
        </div>
      )} */}

      <div className="p-8 w-full max-w-md mt-12">
        <h2 className="mt-8 text-3xl font-bold text-center text-gray-800 mb-5">
          Let’s Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiUser className="text-gray-600" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full py-2 px-3 bg-transparent text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiMail className="text-gray-600" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full py-2 px-3 bg-transparent text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiLock className="text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                className="w-full py-2 px-3 bg-transparent text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-600" />
                ) : (
                  <FiEye className="text-gray-600" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Register and Forgot Password Links */}
          <div className="mt-12 mb-6 text-center mt-6">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default LoginPage;
