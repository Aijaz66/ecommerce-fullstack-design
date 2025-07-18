import React from 'react';
import bg from "../assets/bg1.png"
import bg2 from "../assets/bg2.png"
import sofa from "../assets/products/sofa.jpg"
import Hp from "../assets/products/Hp.jpg"
import lamp from "../assets/products/lamp.jpg"
import mixer from "../assets/products/coffee.jpg"
import coffee from "../assets/products/lamp.jpg"
import chair from "../assets/products/chair.jpg"
import bed from "../assets/products/bed.jpg"
import watch from "../assets/products/watch.jpg"
import jug from "../assets/products/jug.jpg"
import camera from "../assets/products/camera.png"
import headphones from "../assets/products/headphones.png"
import laptop from "../assets/products/laptop.png"
import phone from "../assets/products/phone.png"
import headset from "../assets/products/headset.png"
import bg3 from '../assets/bg3.png';


import ProductCard from './ProductCard';

const CategoriesSection = () => {
  const categories = [
    { title: 'Home and Outdoor', items: ['Soft chairs', 'Sofa & chair', 'Kitchen mixer', 'Blenders'] },
    { title: 'Consumer electronics and gadgets', items: ['Smart watches', 'Cameras', 'Gaming set', 'Laptops & PC'] }
  ];


const electronicsItems = [
    { 
      name: 'Smart watches', 
      price: 'From $29.99', 
      image: watch, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Cameras', 
      price: 'From $99.99', 
      image: camera, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Headphones', 
      price: 'From $19.99', 
      image: headset, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Smart watches', 
      price: 'From $29.99', 
      image: watch, 
      bgColor: 'bg-black' 
    },
    { 
      name: 'Gaming set', 
      price: 'From $49.99', 
      image: headphones, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Laptops & PC', 
      price: 'From $299.99', 
      image: laptop, 
      bgColor: 'bg-orange-50' 
    },
    { 
      name: 'Smartphones', 
      price: 'From $199.99', 
      image: phone, 
      bgColor: 'bg-blue-50' 
    },
    { 
      name: 'Electric kettle', 
      price: 'From $19.99', 
      image: jug, 
      bgColor: 'bg-red-50' 
    }
  ];



  const homeOutdoorItems = [
    { 
      name: 'Soft chairs', 
      price: 'From $29.99', 
      image: sofa, 
      bgColor: 'bg-orange-50' 
    },
    { 
      name: 'Sofa & chair', 
      price: 'From $49.99', 
      image: chair, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Kitchen dishes', 
      price: 'From $19.99', 
      image: bed, 
      bgColor: 'bg-blue-50' 
    },
    { 
      name: 'Smart watches', 
      price: 'From $29.99', 
      image: watch, 
      bgColor: 'bg-red-50' 
    },
    { 
      name: 'Kitchen mixer', 
      price: 'From $39.99', 
      image: mixer, 
      bgColor: 'bg-yellow-50' 
    },
    { 
      name: 'Blenders', 
      price: 'From $24.99', 
      image: coffee, 
      bgColor: 'bg-gray-50' 
    },
    { 
      name: 'Home appliance', 
      price: 'From $49.99', 
      image: Hp, 
      bgColor: 'bg-orange-50' 
    },
    { 
      name: 'Coffee maker', 
      price: 'From $29.99', 
      image: jug, 
      bgColor: 'bg-green-50' 
    }
  ];

  return (
    <div>
    <div className='flex flex-col lg:flex-row rounded-lg mb-4 mx-auto shadow-sm text-gray-700 max-w-[1300px]'>
      
      {/* Background Image Section */}
      <div className='relative lg:flex-shrink-0'>
        <img 
          src={bg} 
          alt="" 
          className='w-full h-48 sm:h-56 md:h-64 lg:h-auto lg:w-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none'
        />
        <div className='absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-[20%] lg:left-3'>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
            Home and <br />Outdoor
          </h2>
          <button className="mt-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-800 border rounded hover:bg-blue-50 text-sm sm:text-base">
            Source Now
          </button>
        </div>
      </div>

      {/* Products Grid Section */}
      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  ">
          {homeOutdoorItems.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      
      
    </div>




<div className='flex flex-col lg:flex-row rounded-lg mb-4 mx-auto shadow-sm text-gray-700 max-w-[1300px]'>
      
      {/* Background Image Section */}
      <div className='relative lg:flex-shrink-0'>
        <img 
          src={bg2} 
          alt="" 
          className='w-full h-48 sm:h-56 md:h-64 lg:h-auto lg:w-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none'
        />
        <div className='absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-[20%] lg:left-3'>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
            Consumer electronics and <br />Gadgets
          </h2>
          <button className="mt-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-800 border rounded hover:bg-blue-50 text-sm sm:text-base">
            Source Now
          </button>
        </div>
      </div>

      {/* Products Grid Section */}
      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  ">
          {electronicsItems.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
    </div>


    <div className="bg-cover h-[450px] rounded mx-auto ml-5 mr-5 mb-4 lg:h-[420px] bg-center h-64" style={{ backgroundImage: `url(${bg3})`  }}>
      <div className='absolute mt-5 ml-3 lg:mt-10 lg:ml-5'>
    <h1 className='text-lg sm:text-2xl lg:text-3xl font-bold text-white'>An Easy Way to Send <br />Request To All Suppliers</h1>
    <p className='mt-2 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptates quibusdam cupiditate dolorum nihil est tempore, quidem facere vero ullam dolor.</p>
    </div>

    <div className='absolute h-[255px]  justify-center mt-45 ml-20 w-[300px] bg-white rounded lg:ml-185 lg:mt-15  lg:h-[310px] lg:w-[491px]'>
          <h1 className='text-xl mt-2 ml-2 lg:text-2xl font-bold text-gray-700'> Send qoute to suppliers</h1>
          <p className='ml-2 mt-3 px-2 p-2 mx-2 my-3 w-[270px] lg:w-[470px] text-gray-500 border border-gray-300 rounded'> What item do you need?</p>
          <input className='ml-2 mt-3 px-2 h-10 lg:h-20 w-[270px] lg:w-[470px]  mx-2 text-gray-700 border border-gray-300 rounded' type="text" placeholder='Type More Details' />
          <div className='grid grid-cols-2'>
            <p className='text-gray-700 border rounded w-[140px] lg:w-[230px] ml-2 mt-3 px-2 p-2 mx-2 my-3  border-gray-300'> Quantity</p>
            <input className="text-gray-700 rounded w-[140px] lg:w-[230px] ml-2 mt-3 px-2 p-2 mx-2 my-3 border border-gray-300" type="number" placeholder='pcs' min="10" max="100" step="1"/>
          </div>
          <button className='bg-blue-500 rounded px-2 text-white p-1 ml-2 hover:bg-blue-200'>Send inquiry</button>

    </div>



    </div>
    </div>
  );
};

export default CategoriesSection;