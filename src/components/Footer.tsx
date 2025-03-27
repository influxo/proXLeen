import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="px-[4%] py-28 bg-[#333333] text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h1>Logo</h1>
          <p className="text-white w-3/4">
            Bij Axo Clean zijn we uw betrouwbare partner, met meer dan maar
            liefst 15 jaar ervaring, voor hoogwaardige schoonmaakdiensten in
            verschillende professionele omgevingen.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                to={"/"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to={"/bookings"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Follow Us</h3>
          </div>
          <div className="space-y-6 w-[40%] lg:w-[70%] xl:w-[40%]">
            <a
              target="_blank"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3 hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaFacebook size={24} />
              <h1>Facebook</h1>
            </a>
            <a
              target="_blank"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3  hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaInstagram size={24} />
              <h1>Instagram</h1>
            </a>
            <a
              target="_blank"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3  hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaYoutube size={24} />
              <h1>Youtube</h1>
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Contact Us</p>
          <div className="flex flex-col text-[#545454] space-y-4 mt-4">
            <p className="text-gray-400 hover:text-white transition-colors">
              Your address
            </p>
            <p className="text-gray-400 hover:text-white transition-colors">
              info@proxleen.com
            </p>
            <p className="text-gray-400 hover:text-white transition-colors">
              +123 456 789
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 -mb-24 text-center text-white border-t border-white pt-6">
        <p>© {new Date().getFullYear()} Proxleen. All Rights Reserved.</p>
        <a
          className="hover:underline hover:text-[#0B63E5]  duration-300"
          target="_blank"
          href="https://www.influxo.dev"
        >
          Made by Influxo
        </a>
      </div>
    </footer>
  );
};
