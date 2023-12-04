/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="section-title contact-title mb-8">
              <span className="text-[#f35903]">Contact Us</span>
              <h2 className="text-4xl font-bold">GET IN TOUCH</h2>
            </div>
            <div className="contact-widget">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-[#f35903] text-2xl mr-2" />
                <p className="text-white">Lebanon</p>
              </div>
              <div className="flex items-center mb-6">
                <FaPhoneAlt className="text-[#f35903] text-2xl mr-2" />
                <ul className="text-white">
                  <li>+961 03/123456</li>
                </ul>
              </div>
              <div className="flex items-center email">
                <FaEnvelope className="text-[#f35903] text-2xl mr-2" />
                <p className="text-white">GYMGENESIS@email.com</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="leave-comment">
              <form action="#" className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-2 p-2 mb-4 bg-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-2 p-2 mb-4 bg-none"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full border-2 p-2 mb-4 bg-none"
                />
                <textarea
                  placeholder="Comment"
                  className="w-full border-2 border-gray-300 p-2 mb-4"
                />
                <button type="submit" className="btn btn-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="map mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
            height="400"
            className="w-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
