"use client"
import Link from "next/link";
import Image from "next/image";
// components/ContactForm.js

import React from "react";
import Navbar from "../Navbar/page";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Thanks For Contact Me");
  };

  return (
    <>
    < Navbar />
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
        <h2 className="py-4 justify-center">

        <center>
        <div className="flex justify-between w-64 gap-6 pt-6">
                        <Link href="https://github.com/Ansharahkhan76"><Image
                        alt="Github"
                        height={40}
                        width={40}
                        src="/github.png"
                        className="rounded-full">
                        </Image></Link>

                        <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7"><Image
                        alt="LinkedIn"
                        height={40}
                        width={40}
                        src="/linkedin.webp"
                        className="rounded-sm ">
                        </Image></Link>

                        <Link href="mailto:anshrahkhan29@gmail.com"> <Image
                        alt="Email"
                        height={40}
                        width={40}
                        src="/email.jpg"
                        className="rounded-full filter grayscale">
                        </Image></Link>

                        <Link href="https://www.instagram.com/_ansharah.khan_"><Image
                        alt="Instagram"
                        height={40}
                        width={40}
                        src="/insta.png"
                        className="rounded-full filter grayscale">
                        </Image></Link>
                        </div>
        </center>

        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-slate-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
