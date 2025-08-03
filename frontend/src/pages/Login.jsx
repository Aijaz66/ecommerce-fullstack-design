import React from 'react'
import {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import axios from 'axios'
const backendUrl = import.meta.env.VITE_API_URL;
const Login = () => {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!formData.email || !formData.password){
      setError("Please fill all fields")
      return
    }

    try {
      const response=await axios.post(`${backendUrl}/api/user/login`,formData,
        {
          headers:{
            'Content-Type': 'application/json',
          },
           withCredentials: true,

      })
      if (response.data.success){
        localStorage.getItem('auth_token',response.data.token)
        
      }else{
        setError(response.data.message);

      }
      
    } catch (error) {
      setError("something went wrong")
      
    }
    

  }



  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} >

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
             onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={handlePasswordToggle}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaRegEyeSlash className='text-xl mt-2'/>
 : <IoEyeOutline className='text-xl mt-2'/>}
              </span>
            </div>
          </div>


        

          <div className="mb-4">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an Account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
        <Footer></Footer>
    </div>
  )
}

export default Login