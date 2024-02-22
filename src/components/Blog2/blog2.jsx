import React from 'react'
import imgPhones from '../../images/illustration-phones.svg'

const blog2 = () => {
  return (
    <>
        <main className='bgBlog2 font-Ubuntu text-White text-center'>
            <section className='rounded-bl-[7rem] rounded-tr-[7rem] md:mt-20 relative lg:px-24 lg:static lg:flex lg:items-center lg:-mt-10 lg:h-[400px] xl:mt-20'>
                <picture>
                    <img src={imgPhones} alt="" className='absolute lg:static -top-48 lg:translate-y-[0%] xl:translate-y-[5%]'/>
                </picture>
                <article className='md:pt-[10rem] lg:pt-0 lg:w-1/2' >
                    <h1 className='text-3xl mb-4 leading-normal pt-60 lg:pt-0 lg:text-left px-5 lg:px-0'>State of the Art Infrastructure</h1>
                    <p className='px-10 md:px-32 lg:px-0 leading-loose pb-32 lg:pb-0 lg:text-left'>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </article>
            </section>
        </main>
    </>
  )
}

export default blog2