import React from 'react'

const ProductCard = ({item}) => {


    
    
  return (
    <div className='flex border border-gray-300 p-3 sm:w-[140px] sm:h-[160px] lg:w-[255px] lg:h-[129px] text-gray-700'>
      <div className=''>
        <p className='text-sm text-gray-700'>{item.name}</p>
        <p className='text-sm text-gray-500'>{item.price}</p>
      </div>
      <div className='flex overflow-hidden ml-10'>
        <img src={item.image} alt="" className='lg:w-[100px] lg:h-[100px] sm:w-[32px] sm:h-[32px] object-cover '/>
        </div>


    
    </div>
  )
}

export default ProductCard