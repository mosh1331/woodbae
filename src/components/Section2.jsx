import React from 'react'

const Section2 = () => {
  return (
    <div className='bg-[#F4F3F1] p-24 text-secondary-text'>
      <div className="flex items-center w-full mb-8 gap-x-4">
        <div className="w-1/2">
          <img src={'/living1.jpeg'} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2">
          <h2 className="text-primary-text text-title">Our Projects</h2>
          <p className="text-secondary-text text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem maxime cum voluptates? Accusantium doloribus perferendis, illum qui tempore laudantium beatae exercitationem odio maiores, quidem deleniti magnam eaque provident.</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="w-1/3">
          <img src={'/living1.jpeg'} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/3">
          <img src={'/living1.jpeg'} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/3">
          <img src={'/living1.jpeg'} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Section2