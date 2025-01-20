import ig from "../assets/instagram.png";
import linked from "../assets/linked.png";
import tiktok from "../assets/tiktok.png"

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Wrapper untuk Footer */}
      <div className="relative max-w-screen-xl mx-auto px-8 lg:px-16">
        <footer className="bg-white text-gray-800 rounded-3xl shadow-lg px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
            {/* Deskripsi */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Karya Visual
              </h3>
              <p className="text-sm mb-4">
                Kami menyediakan solusi desain grafis yang cepat, kreatif, dan
                terjangkau dengan jaminan kepuasan.
              </p>
              <p className="text-sm">
                Dapatkan desain berkualitas untuk kebutuhan Anda dengan layanan
                yang profesional.
              </p>
            </div>

            {/* Menu Bar */}
            <ul className="flex content-center flex-wrap justify-end space-x-6 text-sm text-gray-900">
              {[
                { name: "Home", url: "#" },
                { name: "Services", url: "#" },
                { name: "Dashboard", url: "#" },
                { name: "Support", url: "#" },
                { name: "Resource", url: "#" },
              ].map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.url}
                    className="hover:text-gray-900 transition duration-300"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex justify-end mt-6">
            <ul className="flex space-x-4">
              {[
                {
                  name: "Instagram",
                  icon: ig,
                  url: "https://www.instagram.com",
                },
                {
                  name: "LinkedIn",
                  icon: linked,
                  url: "https://linkedin.com",
                },
                {
                  name: "Tiktok",
                  icon: tiktok,
                  url: "https://tiktok.com",
                },
                
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition duration-300"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6 filter invert contrast-150"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
