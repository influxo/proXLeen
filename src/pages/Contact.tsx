import React, { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/Background.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name1: "",
    email1: "",
    name2: "",
    email2: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name1: "",
      email1: "",
      name2: "",
      email2: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="relative bg-white min-h-screen">
      <div className="absolute lg:top-16 z-50 px-[10%] w-full">
        <Navbar />
      </div>

      {/* Contact Section with Sloping Background */}
      <div className="relative overflow-hidden pt-32 pb-10">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full object-cover z-0 brightness-75 hidden lg:block"
          style={{
            height: "900px",
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
          }}
        />
        <img
          src={backgroundImage}
          alt="Background"
          className="block lg:hidden absolute top-0 left-0 w-full object-cover z-0 brightness-75 h-screen"
        />

        <div className="px-[10%]  lg:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            {/* Left side - Contact Information */}
            <div className="text-white lg:p-10 lg:w-1/2 relative hidden lg:block">
              <div className=" lg:ml-auto lg:mr-0 lg:pr-10">
                <h2 className="text-5xl font-bold mb-6">Contact us</h2>
                <p className="mb-8 opacity-90">
                  Aenean vestibulum felis nec egestas fringilla. Duis non felis
                  consequat, varius sapien convallis, tincidunt nisi.
                </p>

                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">EMAIL US</p>
                    <a href="mailto:info@lorem.com" className="hover:underline">
                      info@lorem.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:pl-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:max-w-xl  lg:mr-auto lg:ml-0">
                <h3 className="text-xl font-semibold mb-4">
                  Request A Quote — let's work together.
                </h3>
                <p className="mb-6 text-gray-600 text-sm">
                  Drop me a line if you want to work together on something
                  exciting. Or do you need our help? Feel free to contact us.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name1"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name1"
                        name="name1"
                        value={formData.name1}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email1"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email1"
                        name="email1"
                        value={formData.email1}
                        onChange={handleChange}
                        placeholder="Email adress"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name2"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name2"
                        name="name2"
                        value={formData.name2}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email2"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email2"
                        name="email2"
                        value={formData.email2}
                        onChange={handleChange}
                        placeholder="Email adress"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Reason
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded inline-flex items-center transition duration-300"
                  >
                    Request A Quote
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-[10%] mx-auto  pb-16">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.0195508303896!2d5.2273064!3d45.7389383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ0JzIwLjIiTiA1wrAxMycyNi4zIkU!5e0!3m2!1sen!2sus!4v1616682224289!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
