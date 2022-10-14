import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Haciendo lo que me gusta</h1>  
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
          <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <Image 
              src='https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='/'
              layout='responsive'
              width='677'
              height='451'
            />
          </div>
          <div className='w-full h-full'>
            <Image 
              src='https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='/'
              width='215'
              height='217'
              layout='responsive'
              objetfit='cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image 
              src='https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='/'
              width='215'
              height='217'
              layout='responsive'
              objetfit='cover'
            />
          </div> 
          <div className='w-full h-full'>
            <Image 
              src='https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='/'
              width='215'
              height='217'
              layout='responsive'
              objetfit='cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image 
              src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
              alt='/'
              width='215'
              height='217'
              layout='responsive'
              objetfit='cover'
            />
          </div>
        </div>
    </div>
  )
}

export default Portfolio
