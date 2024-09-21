import React, { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaExclamationCircle, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!name || !email || !password) {
      setErrorMessage('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:3000/api/v1/createAccount', {
        name,
        email,
        password
      });
      setSuccessMessage('Registration successful! You can now login.');
      setLoading(false);
    } catch (e) {
      setErrorMessage('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">Welcome to Flavero!</h1>
      </header>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md my-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>

        <form onSubmit={submit} className="space-y-5">
          {errorMessage && (
            <div className="flex items-center text-red-500 bg-red-100 p-3 rounded-md">
              <FaExclamationCircle className="mr-2" /> {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="flex items-center text-green-500 bg-green-100 p-3 rounded-md">
              <FaCheckCircle className="mr-2" /> {successMessage}
            </div>
          )}

          {/* Full Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="text"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-semibold px-4 py-2 rounded-md flex items-center transition duration-300`}
              disabled={loading}
            >
              {loading && <ImSpinner2 className="animate-spin mr-2" />}
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {/* Social Media Buttons */}
          <div className="text-center mt-4">
            <p className="text-gray-500">Or sign up with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center">
                <FaGoogle className="mr-2" /> Google
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <FaFacebookF className="mr-2" /> Facebook
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-600 text-white text-center py-4 shadow-md">
        <p>&copy; 2024 Flavero. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Registration;
