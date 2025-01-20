import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiCheck } from "react-icons/fi";
import background from "../../assets/bglogin.jpg";

const MessagePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name cannot contain numbers";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    const wordCount = formData.message.trim().split(/\s+/).length;
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    } else if (wordCount > 100) {
      newErrors.message = "Message cannot exceed 100 words";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Form Submitted:", formData);
      setNotification("Message Sent Successfully!");

      // Clear form and notification after 3 seconds
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setNotification(""), 3000);
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
      {/* Notification */}
      {notification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg flex items-center gap-2">
          <FiCheck className="text-green-600 w-6 h-6" />
          {notification}
        </div>
      )}

      <div className="p-8 w-full max-w-md mt-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-transparent text-gray-500 rounded-lg focus:outline-none focus:ring-0"
                required
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
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
              <FiMail className="text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-transparent text-gray-500 rounded-lg focus:outline-none focus:ring-0"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Message
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg px-4">
              <FiMessageSquare className="text-gray-400 mt-3" />
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2 px-3 bg-transparent text-gray-500 rounded-lg focus:outline-none focus:ring-0 resize-none"
                rows="5"
                required
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#4E47FF] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagePage;
