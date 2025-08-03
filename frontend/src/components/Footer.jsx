import React from 'react'
import logo from "../assets/logo-symbol.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-white w-full border border-gray-200 p-9'>

        

        <div className="grid grid-cols-2 md:grid-cols-5 mx-9 gap-8">


            <div className='container '>
        <div className='flex items-center'>
            <img src={logo} alt="" />
            <span className="text-xl font-semibold text-blue-500">Brand</span>
        </div>

        <p className='text-sm text-gray-500 mt-2'>Best information about the <br /> company goes here</p>

        <div className="mt-4 flex gap-5 text-gray-500">
            <a href="#" className=""><FaFacebook /></a>
            <a href="#" className=""><FaTwitter /></a>
            <a href="#" className=""><FaLinkedin /></a>
            <a href="#" className=""><FaInstagramSquare /></a>
          </div>


        </div>




          <div>
            <h3 className="text-lg font-semibold text-gray-700">About</h3>
            <ul className="mt-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Find store</a></li>
              <li><a href="#" className="hover:text-blue-600">Categories</a></li>
              <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
            </ul>
          </div>

          

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Information</h3>
            <ul className="mt-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-600">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">For Users</h3>
            <ul className="mt-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Login</a></li>
              <li><a href="#" className="hover:text-blue-600">Register</a></li>
              <li><a href="#" className="hover:text-blue-600">Settings</a></li>
              <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
            </ul>
          </div>


          <div className=" text-center">
          <h3 className="text-lg font-semibold text-gray-700">Get App</h3>
          <div className="mt-4 ">
            <div href="#" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-md py-2 px-3 mb-2"> <FaApple className='text-xl mr-2' />App Store</div><br />
            <div href="#" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-md py-2 px-3 mb-2"> <FaGooglePlay className='text-xl mr-2' />App Store</div>
          </div>
        </div>



        </div>
        <div className="mt-4 border-t w-full border-gray-200 pt-4 text-center text-gray-600">
          <p>&copy; 2023 Ecommerce.</p>
          <div className="mt-1 ">
            <span className="text-sm">English</span>
          </div>
        </div>
    </footer>
  )
}

export default Footer