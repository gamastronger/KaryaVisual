import { useState } from "react";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative">
      {/* Rounded Navbar */}
      <div
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 bg-white py-3 px-20 flex items-center justify-between rounded-full shadow-lg text-[#14203D] w-[100%] md:w-[70%] lg:w-[55%] z-50`}
      >
        {/* Links for Desktop */}
        <div className="text-[#424242] hidden md:flex items-center justify-center gap-16 text-sm font-sans">
          <a
            href="/"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            Home
          </a>
          <a
            href="/portofolio"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            Service
          </a>
          <a
            href="/layanan"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            Dashboard
          </a>
          <a
            href="/pemesanan"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            Support
          </a>
          <a
            href="#"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            Resource
          </a>
          <a
            href="/login"
            className="hover:text-[#6eacda] transition duration-300 font-semibold"
          >
            login
          </a>
          
            
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-[#14203D]"
          onClick={handleSidebar}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarVisible && (
        <aside
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
          onClick={handleSidebar}
        >
          <div className="absolute top-0 right-0 w-64 bg-white shadow-lg p-6 rounded-l-xl h-full flex flex-col items-center">
            <button
              className="self-end text-[#14203D] mb-4"
              onClick={handleSidebar}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col items-center gap-4 text-black">
              <li>
                <a
                  href="/"
                  className="text-lg hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portofolio"
                  className="text-lg hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  className="text-lg hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/pemesanan"
                  className="text-lg hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/resource"
                  className="text-lg hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Resource
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
