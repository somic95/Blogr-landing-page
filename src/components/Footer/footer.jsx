import footerLogo from '../../images/logo.svg'


const footer = () => {
  return (
    <>
        <div className='bg-Very-dark-black-blue rounded-tr-[7rem]'>
            <footer>
                <main>
                    <div className='flex flex-col justify-center items-center xl:justify-start xl:pl-44 lg:flex-row'>
                            <img src={footerLogo} alt="" className='py-20 lg:pr-32 lg:translate-y-[-45%]'/>
                        <section className='text-White font-Ubuntu lg:flex gap-24 lg:gap-48 lg:py-16'>
                            <div className='flex flex-col'>
                                <button className='pb-5'>Product</button>
                                    <ul className='text-White/50 flex flex-col items-center gap-2 pb-10 lg:pb-0'>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Overview</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Pricing</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Marketplace</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Features</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Integrations</li>
                                    </ul>
                            </div>
                            <div className='flex flex-col'>
                                <button className='pb-5'>Company</button>
                                    <ul className='text-White/50 flex flex-col items-center gap-2 pb-10 lg:pb-0'>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>About</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Team</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Blog</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Careers</li>
                                    </ul>
                            </div>
                            <div className='flex flex-col'>
                                <button className='pb-5'>Connect</button>
                                    <ul className='text-White/50 flex flex-col items-center gap-2 pb-16 lg:pb-0'>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Contact</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>Newsletter</li>
                                        <li className='hover:underline hover:font-bold hover:cursor-pointer'>LinkedIn</li>
                                    </ul>
                            </div>
                        </section>
                    </div>
                </main>
            </footer>
        </div>
    </>
  )
}

export default footer