import React from "react";
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






export default function DealsSection() {

  const products = [
  {
    id: 1,
    name: "Smart watches",
    image: watch,
    discount: "-25%",
  },
  {
    id: 2,
    name: "Laptops",
    image: laptop,
    discount: "-15%",
  },
  {
    id: 3,
    name: "GoPro cameras",
    image: camera,
    discount: "-40%",
  },
  {
    id: 4,
    name: "Headphones",
    image: headphones,
    discount: "-25%",
  },
  {
    id: 5,
    name: "Canon cameras",
    image:camera,
    discount: "-25%",
  },
];

const homeOutdoorItems = [
    { name: 'Soft chairs', price: 'From $29.99', image: '🪑', bgColor: 'bg-orange-50' },
    { name: 'Sofa & chair', price: 'From $49.99', image: '🛋️', bgColor: 'bg-gray-50' },
    { name: 'Kitchen dishes', price: 'From $19.99', image: '🍽️', bgColor: 'bg-blue-50' },
    { name: 'Smart watches', price: 'From $29.99', image: '⌚', bgColor: 'bg-red-50' },
    { name: 'Kitchen mixer', price: 'From $39.99', image: '🥤', bgColor: 'bg-yellow-50' },
    { name: 'Blenders', price: 'From $24.99', image: '🥤', bgColor: 'bg-gray-50' },
    { name: 'Home appliance', price: 'From $49.99', image: '🏠', bgColor: 'bg-orange-50' },
    { name: 'Coffee maker', price: 'From $29.99', image: '☕', bgColor: 'bg-green-50' }]

  return (
    <div className=" text-gray-700 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Deals and offers</h2>
            <p className="text-gray-600">Hygiene equipments</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            {["04", "13", "34", "56"].map((val, idx) => (
              <div key={idx} className="bg-gray-800 text-white px-3 py-2 rounded text-sm text-center">
                <div className="font-bold">{val}</div>
                <div className="text-xs">
                  {["Days", "Hour", "Min", "Sec"][idx]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg flex flex-col items-center p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-24 object-contain mb-2"
              />
              <p className="text-sm text-gray-700 text-center">{product.name}</p>
              <span className="text-xs mt-1 bg-red-100 text-red-500 rounded-full px-2 py-0.5">
                {product.discount}
              </span>
            </div>
          ))}
        </div>
      </div>

     



    </div>
    
  );
}
