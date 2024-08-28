import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Company Name</h3>
            <p className="text-indigo-200 mb-4">
              Providing innovative solutions for your business needs since 2010.
            </p>
            <div className="flex space-x-4">
              {[faTwitter, faFacebookF, faLinkedinIn, faInstagram].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Projects", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-indigo-200 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "IT Consulting", "Data Analytics"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-indigo-200 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-indigo-300" />
                <span className="text-indigo-200">123 Business Ave, Suite 100, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-3 text-indigo-300" />
                <Link
                  href="tel:+11234567890"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3 text-indigo-300" />
                <Link
                  href="mailto:info@company.com"
                  className="text-indigo-200 hover:text-white transition duration-300"
                >
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
          <p>
            © {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
          <p className="mt-2">
            Designed and Developed by{" "}
            <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
              Your Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;