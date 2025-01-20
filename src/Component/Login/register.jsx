import { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiMapPin,
  FiCheck,
} from "react-icons/fi";
import background from "../../assets/background.jpg";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePhone = (phone) => /^[0-9]+$/.test(phone);

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!validateName(name)) {
      newErrors.name = "Name cannot contain numbers or special characters";
      valid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Nomor tidak valid, hanya angka yang diperbolehkan";
      valid = false;
    }

    if (address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Registration Successful");
      setNotification("Registration Successful!");

      setTimeout(() => {
        setNotification("");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
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
      {notification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
          <FiCheck className="text-green-600 w-6 h-6" />
          {notification}
        </div>
      )}

      <div className="mt-8 p-8 w-full max-w-3xl mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-10">
          Let’s Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your Address"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
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
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Your Password"
                  className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-0 rounded-lg"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
