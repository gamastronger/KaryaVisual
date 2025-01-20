import { useState } from "react";
import LogoAkaza from "../assets/logo.png"; // Ganti path dengan lokasi logo Anda

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header className="relative">
      {/* Logo */}
      <div className="absolute top-5 left-20 flex items-center z-50">
        <img src={LogoAkaza} alt="Logo Akaza" className="w-10 h-10" />
        <span className="text-[#14203D] text-xl font-bold ml-2"></span>
      </div>

      {/* Sign In and Sign Up */}
      <nav className="absolute top-5 right-4 flex items-center gap-4 z-50">
        <a
          href="/login"
          className="text-gray-600 hover:text-[#6eacda] transition duration-300 font-semibold"
        >
          Sign In
        </a>
        <a
          href="/register"
          className="bg-[blue] text-white py-2 px-4 rounded-lg hover:bg-[#558ed6] transition duration-300 font-semibold"
        >
          Sign Up
        </a>
      </nav>

      {/* Rounded Navbar */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white py-3 px-20 flex items-center justify-between rounded-full shadow-lg text-[#14203D] w-[100%] md:w-[70%] lg:w-[55%] z-40">
        {/* Links for Desktop */}
        <ul className="hidden md:flex items-center gap-16 text-sm font-sans text-[#424242]">
          <li>
            <a
              href="/"
              className="hover:text-[#6eacda] transition duration-300 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/portofolio"
              className="hover:text-[#6eacda] transition duration-300 font-semibold"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="/layanan"
              className="hover:text-[#6eacda] transition duration-300 font-semibold"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/pemesanan"
              className="hover:text-[#6eacda] transition duration-300 font-semibold"
            >
              Support
            </a>
          </li>
          <li>
            <a
              href="/resource"
              className="hover:text-[#6eacda] transition duration-300 font-semibold"
            >
              Resource
            </a>
          </li>
        </ul>

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
          <div
            className="w-64 bg-white shadow-lg p-6 rounded-l-xl h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
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
            <ul className="flex flex-col items-center gap-4 text-black text-lg">
              <li>
                <a
                  href="/"
                  className="hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portofolio"
                  className="hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  className="hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/pemesanan"
                  className="hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/resource"
                  className="hover:text-[#6eacda] transition duration-300"
                  onClick={handleSidebar}
                >
                  Resource
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
