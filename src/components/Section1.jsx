import React from 'react'

const Section1 = () => {
    return (
        <div className='bg-white p-24 flex items-center' id="section1">
            <div className="w-1/2">
                <h2 className=" text-primary-text text-title mb-8">Woodbae Interiors Crafting Your homes</h2>
                <p className="text-sm text-black w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nulla error nesciunt,
                    itaque soluta eveniet dolores laborum atque dolore,
                    tenetur ipsum. Ex, nobis aliquid? Dolore dolores ducimus odio sit reiciendis.</p>
            </div>
            <div   className="w-1/2 relative">
                <div style={{zIndex:10}}  className="w-[90%] ">
                    <iframe className='w-full h-[350px] z-2' src="https://www.youtube.com/embed/OcAc32a00ig?si=MCAZVKfueL97iMtu&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            {/* <div  style={{zIndex:0}} className="w-1/2 h-[200px]  bg-[red] absolute top-[-20px] right-[-20px]"></div> */}

            </div>

        </div>
    )
}

export default Section1