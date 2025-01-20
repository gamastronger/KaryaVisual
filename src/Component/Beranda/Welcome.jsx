import React, { useEffect, useState } from "react";
import bgpanjang from "../../assets/bgwelcome+.png";
import mobileIcon from "../../assets/mobiledevelopment.png";
import webIcon from "../../assets/webdev.png";
import cloudIcon from "../../assets/cloudservice.png";
import maintenanceIcon from "../../assets/maintenance.png";
import uiux from "../../assets/uiuxdesign.png";

const Welcome = () => {
  const [dots, setDots] = useState([]);
  const [textVisible, setTextVisible] = useState(false);

  // Create random dots
  useEffect(() => {
    const dotCount = 35; // Number of dots
    const dotElements = [];
    for (let i = 0; i < dotCount; i++) {
      const delay = Math.random() * 8; // Random delay for each dot
      const left = Math.random() * 100; // Random position across the width
      const size = Math.random() * 4 + 2; // Random size of the dots
      dotElements.push({ delay, left, size });
    }
    setDots(dotElements);

    // Trigger text animation on component load
    setTimeout(() => {
      setTextVisible(true);
    }, 300); // Delay before text appears
  }, []);

  const services = [
    {
      name: "Mobile Development",
      icon: mobileIcon,
      description:
        "We create stunning mobile apps tailored to your needs, offering seamless performance and user-friendly interfaces.",
    },
    {
      name: "UI/UX Design",
      icon: uiux,
      description:
        "We create stunning mobile apps tailored to your needs, offering seamless performance and user-friendly interfaces.",
    },
    {
      name: "Web Development",
      icon: webIcon,
      description:
        "From concept to launch, we build stunning, user-centric websites that elevate your brand and engage your audience.",
    },
    {
      name: "Cloud Service & Hosting",
      icon: cloudIcon,
      description:
        "Secure and scalable cloud solutions to host your applications with high performance and minimal downtime.",
    },
    {
      name: "Maintenance & Support",
      icon: maintenanceIcon,
      description:
        "Ongoing support to ensure your platforms stay updated, secure, and running smoothly at all times.",
    },
    
  ];

  return (
    <section
      className="relative px-6 py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgpanjang})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating dots animation */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute bg-[#4FCAFF] rounded-full opacity-75"
          style={{
            bottom: "-10%",
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `floatUp ${5 + dot.size}s ease-in infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        ></div>
      ))}

      {/* Hero Section */}
      <div className="container mx-auto mb-36 mt-24 flex flex-col items-center text-center px-6 lg:px-16">
        <div className="lg:w-3/4">
          <h1
            className={`lg:text-7xl font-bold font-sans mb-5 leading-tight transition-opacity duration-1000 ease-out transform text-black bg-clip-text ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Build Your <br /> Awesome <br /> Platform
          </h1>
          <p
            className={`font-sans text-slate-400 text-[15px] md:text-[20px] mb-8 leading-relaxed transition-opacity duration-1000 ease-out transform ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          ></p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/6283112080715"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-black text-white px-6 py-3 font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* "What We Do" Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-16">
        <h2 className="text-5xl text-black font-bold text-left mb-12">What We Do</h2>
        <div className="flex flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={`${service.name} icon`}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
