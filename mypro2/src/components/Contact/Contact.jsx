import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contacts', formData);
      if (response.status === 201) {
        console.log('Form submitted successfully:', response.data);
        
        setFormData({ fullName: '', email: '', phone: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <span id="contact"></span>
      <div className="dark:bg-black dark:text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-5xl font-bold text-white">
                Let's work together on your next project
              </h1>
              <p className="text-gray-400">
                Who are want to great projects! Contact me now.
              </p>
            </div>
            <div className="form1">
              <form onSubmit={handleSubmit}>
                <div className="sm:col-span-4">
                  <h2 className="font-bold text-white">Full Name</h2>
                  <div className="mt-2">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <h2 className="font-bold text-white">Email</h2>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <h2 className="font-bold text-white">Phone Number</h2>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
