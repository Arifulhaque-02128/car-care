import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4 lg:p-8'>
        <div style={{backgroundImage : `url("/assets/images/banner/5.jpg")`}} className="relative bg-cover bg-center w-full h-120 rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col space-y-2 justify-center ml-4 md:ml-48">
                <space className="text-xl md:text-4xl font-bold text-white w-80"> Affordable Price  </space>
                <space className="text-xl md:text-4xl font-bold text-white w-80"> Car Servicing  </space>
                <p className="text-white w-80 text-justify mt-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

            </div>
        </div>
    </div>
  )
}

export default Hero