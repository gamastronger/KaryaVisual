import React, { useState } from "react";
import portfolioImg1 from "../../assets/imerch/imerch1.png";
import portfolioImg2 from "../../assets/imerch/imerch2.png";
import portfolioImg3 from "../../assets/imerch/imerch3.png";
import portfolioImg4 from "../../assets/imerch/imerch4.png";
import portfolioImg5 from "../../assets/imerch/imerch5.png";
import blogImg1 from "../../assets/imgcustom/icustom1.png"; // Gambar berita pertama
import blogImg2 from "../../assets/imgcustom/icustom1.png"; // Gambar berita kedua
import blogImg3 from "../../assets/imgcustom/icustom1.png"; // Gambar berita ketiga

const LandingPage = () => {
  const portfolioItems = [
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioImg4,
    portfolioImg5,
  ];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at second image

  const handleImageClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  // Data untuk blog
  const blogPosts = [
    {
      title: "New Trends in Digital Solutions",
      date: "January 10, 2025",
      description:
        "Discover the latest trends in digital solutions that are revolutionizing industries worldwide. Stay ahead of the curve and learn about cutting-edge technologies.",
      image: blogImg1,
      link: "#",
    },
    {
      title: "How AI is Shaping the Future of Technology",
      date: "January 18, 2025",
      description:
        "AI is not just a buzzword—it's the driving force behind many breakthroughs in technology. In this article, we explore how AI is changing the game for businesses across sectors.",
      image: blogImg2,
      link: "#",
    },
    {
      title: "5 Key Tips for Building a User-Centered Website",
      date: "January 20, 2025",
      description:
        "User-centered design is more important than ever in creating effective websites. Learn the key tips to build websites that prioritize user experience.",
      image: blogImg3,
      link: "#",
    },
  ];

  return (
    <div className="bg-[#F9FBFF] text-black">
      {/* Header Section */}
      <div className="container mx-auto py-16 px-6 lg:px-16 text-left">
        <h1 className="lg:text-5xl font-bold text-black leading-tight mb-6">
          Why AKAZA Is The Best Choice?
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600 mb-8 max-w-4xl text-justify">
          At Akaza Studio, we combine innovation, expertise, and a client-first
          approach to deliver tailored digital solutions. From user-centered
          designs to cutting-edge technology, we ensure your projects are not
          only functional but also impactful. With our end-to-end support, your
          success is our priority.
        </p>
      </div>

      {/* Portfolio Section */}
      <div className="container mx-auto text-center py-16 px-6 lg:px-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D255E] mb-6">
          Our Awesome Portfolio
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Take a look at some of our recent projects to see how we’ve helped
          businesses like yours succeed online.
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                (currentIndex - 1) * 33.33
              }%)`, // Shift based on the current index
            }}
          >
            {portfolioItems.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)} // Focus on clicked image
                className={`cursor-pointer transition-transform duration-300 ${
                  currentIndex === index
                    ? "scale-110" // Slight zoom effect
                    : "scale-90 opacity-75" // Less opacity for non-active images
                } bg-white border rounded-lg shadow-lg overflow-hidden mx-2`}
                style={{
                  flex: "0 0 33.33%",
                  height: "300px", // Set height for each image
                  transition: "transform 0.3s ease", // Smooth zoom transition
                }}
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-contain" // Ensures image stays fully visible
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-6">
          {portfolioItems.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                currentIndex === index ? "bg-[#0D255E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto py-16 px-6 lg:px-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D255E] mb-6 text-center">
          Latest News from Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={`Blog post ${index + 1}`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold text-[#0D255E] mt-4">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-lg text-gray-700 mt-4">{post.description}</p>
              <a
                href={post.link}
                className="text-[#0D255E] font-bold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[white] py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 lg:px-16">
          {[{ number: "40+", label: "Clients" }, { number: "100+", label: "Rating Apps" }, { number: "4.7", label: "Rating Average" }, { number: "1.2", label: "Apps Downloaded" }].map(
            (stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl font-bold text-[#0D255E] mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-16 px-6 lg:px-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D255E] mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Hear from the businesses that trust our services.
        </p>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {["Client 1", "Client 2", "Client 3"].map((client, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white border rounded-lg shadow-lg p-6 text-left hover:scale-105 transition-transform"
            >
              <p className="text-gray-700 mb-4">
                The team at Akaza is amazing! They delivered exactly what we
                needed.
              </p>
              <h4 className="text-lg font-bold text-[#0D255E]">{client}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0D255E] py-8 text-center text-white">
        <p>Copyright © 2025 Akaza Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
