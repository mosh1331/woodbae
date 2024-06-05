import React from 'react'

const Section3 = () => {
    return (
        <div className='bg-white p-24 flex items-center' id="section1">
            <div className="w-1/2">
                <h2 className=" text-primary-text text-title mb-8">Woodbae Interiors Crafting Your homes</h2>
                <p className="text-sm text-black w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nulla error nesciunt,
                    itaque soluta eveniet dolores laborum atque dolore,
                    tenetur ipsum. Ex, nobis aliquid? Dolore dolores ducimus odio sit reiciendis.</p>
            </div>
            <div   className="w-1/2 flex items-center gap-x-4">
                        <div className='w-1/3'>
                            <div className="w-full h-[300px]">
                                <img src="/living3.jpeg" alt="" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-primary-text text-md">Vintage Sofa Collection</p>
                        </div>
                        <div className='w-1/3'>
                            <div className="w-full h-[300px]">
                                <img src="/living2.jpeg" alt="" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-primary-text text-md">Vintage Sofa Collection</p>
                        </div>
            </div>

        </div>
    )
}

export default Section3