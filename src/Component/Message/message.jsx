import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import background from "../../assets/bglogin.jpg";

const MessagePage = () => {
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
      <div className="p-8 w-full max-w-md mt-20">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Wed love to hear from you! Fill out the form below.
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
            <div className="flex items-center border border-gray-400 rounded-lg px-4">
              <FiUser className="text-gray-400" />
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
            <div className="flex items-center border border-gray-400 rounded-lg px-4">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Message
            </label>
            <div className="flex items-start border border-gray-500 rounded-lg px-4">
              <FiMessageSquare className="text-gray-400 mt-3" />
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full py-2 px-3 bg-transparent text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg resize-none"
                rows="5"
                required
              />
            </div>
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
