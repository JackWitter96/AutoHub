import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="contact">
      <div className="mx-auto p-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center ">
          <div className="w-full lg:w-10/12 h-full px-4 mb-4 ">
            <div className="bg-white p-4 rounded-lg shadow-xl h-full">
              <h1 className='text-3xl mb-4'>Get in touch</h1>
              <p className="text-xl mb-4">
                Speak to our amazing team of experts today who will manage every worry or question you may have.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <button type="submit" className="submit-button hover:bg-gray-800 hover:text-white mt-4 mx-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
