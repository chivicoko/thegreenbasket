import React from 'react'

const DiscountBadge = ({discountPercentage}: {discountPercentage: string}) => {
  return (
    <div className="absolute z-30 -top-7 -left-1 md:-left-7 size-20 md:size-24 bg-blue-950 rounded-full text-white">
      <p className='transform translate-x-1/8 translate-y-3/4 md:translate-y-1/2 text-center flex flex-col'>
        <span><span className='md:hidden'>-</span><span className='text-xl font-semibold'>{discountPercentage || 70}</span><sub>%</sub></span> 
        {/* <span><span className='md:hidden'>-</span><span className='text-xl font-semibold'>70</span><sub>%</sub></span>  */}
        <span className='uppercase text-xs hidden md:block'>discount</span>
      </p>
    </div>
  )
}

export default DiscountBadge