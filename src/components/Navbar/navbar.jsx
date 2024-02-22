import { useState } from 'react'
import logo from '../../images/logo.svg'
import arrowDark from '../../images/icon-arrow-dark.svg'
import arrowLight from '../../images/icon-arrow-light.svg'
import hamOpen from '../../images/icon-hamburger.svg'
import hamClose from '../../images/icon-close.svg'

const navbar = () => {

    const [dropdownProduct, setDropdownProduct] = useState(false)
    const [dropdownCompany, setDropdownCompany] = useState(false)
    const [dropdownConnect, setDropdownConnect] = useState(false)
    const [menuProduct, setMenuProduct] = useState(false)
    const [menuCompany, setMenuCompany] = useState(false)
    const [menuConnect, setMenuConnect] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

  return (
    <>
        <div className='bgImgNav lg:rounded-bl-[100px] rounded-bl-[70px]'>
            <nav className='flex'>
                <main className='lg:w-3/4 lg:py-24 lg:px-0 xl:py-20 mx-auto w-full px-7 pt-20'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="logo"/>

                        {/* desktop nav view */}
                        <section className='flex items-center lg:gap-10 xl:gap-20 lg:mr-12 xl:mr-[150px] text-White font-Ubuntu font-medium'>
                            <div>
                                <button
                                onClick={()=>{setDropdownProduct(!dropdownProduct)}}
                                className='hidden lg:flex lg:items-center lg:hover:underline'
                                >
                                Product {dropdownProduct ? <img src={arrowLight} alt="" className='rotate-180 ml-2'/> : <img src={arrowLight} alt="" className='ml-2'/>}
                                </button>
                                {dropdownProduct && <ul className='sub-menu flex flex-col gap-2 bg-White text-Very-dark-black-blue cursor-pointer mt-5 p-5 rounded-lg shadow-2xl'>
                                    <li className='font-light hover:font-bold'>Overview</li>
                                    <li className='font-light hover:font-bold'>Pricing</li>
                                    <li className='font-light hover:font-bold'>Marketplace</li>
                                    <li className='font-light hover:font-bold'>Features</li>
                                    <li className='font-light hover:font-bold'>Integrations</li>
                                </ul>}
                            </div>
                            <div>
                                <button
                                onClick={()=>{setDropdownCompany(!dropdownCompany)}}
                                className='hidden lg:flex lg:items-center lg:hover:underline'
                                >
                                Company {dropdownCompany ? <img src={arrowLight} alt="" className='rotate-180 ml-2'/> : <img src={arrowLight} alt="" className='ml-2'/>}
                                </button>
                                {dropdownCompany && <ul className='sub-menu flex flex-col gap-2 bg-White text-Very-dark-black-blue cursor-pointer mt-5 p-5 rounded-lg shadow-2xl'>
                                    <li className='font-light hover:font-bold'>About</li>
                                    <li className='font-light hover:font-bold'>Team</li>
                                    <li className='font-light hover:font-bold'>Blog</li>
                                    <li className='font-light hover:font-bold'>Careers</li>
                                </ul>}
                            </div>
                            <div>
                                <button
                                onClick={()=>{setDropdownConnect(!dropdownConnect)}}
                                className='hidden lg:flex lg:items-center lg:hover:underline'
                                >
                                Connect {dropdownConnect ? <img src={arrowLight} alt="" className='rotate-180 ml-2'/> : <img src={arrowLight} alt="" className='ml-2'/>}
                                </button>
                                {dropdownConnect && <ul className='sub-menu flex flex-col gap-2 bg-White text-Very-dark-black-blue cursor-pointer mt-5 p-5 rounded-lg shadow-2xl'>
                                    <li className='font-light hover:font-bold'>Contact</li>
                                    <li className='font-light hover:font-bold'>Newsletter</li>
                                    <li className='font-light hover:font-bold'>LinkedIn</li>
                                </ul>}
                            </div>
                            
                        </section>
                        <div className='hidden login-signup text-White font-Ubuntu lg:flex lg:gap-5 xl:gap-10  font-medium'>
                                <button>Login</button>
                                <button className='rounded-full cursor-pointer px-8 py-3 bg-White hover:text-White hover:bg-White/25 text-Light-red'>Sign Up</button>
                            </div>
                        {/* end = desktop nav view */}

                        {/* mobile nav view */}
                        <section className='lg:hidden font-Overpass'>
                            <div>
                                <button onClick={handleToggle}>
                                    {isOpen ? <img src={hamClose} alt="mobile-menu"/> : <img src={hamOpen} alt="mobile-menu"/>}
                                </button>
                                    {isOpen && (
                                    <div className='absolute flex flex-col gap-5 text-center font-semibold mt-10 rounded-lg shadow-2xl right-6 bg-White max-w-[88%] w-[350px]'>
                                        <div className='mt-8'>
                                            <button 
                                            onClick={()=>{setMenuProduct(!menuProduct)}}
                                            className='flex items-center mx-auto focus:text-Very-dark-grayish-blue text-Very-dark-blue'
                                            >
                                            Product {menuProduct ? <img src={arrowDark} alt="" className='rotate-180 ml-2'/> : <img src={arrowDark} alt="" className='ml-2'/>}
                                            </button>
                                            {menuProduct && <ul className='flex flex-col my-5 mx-5 py-5 gap-3 cursor-pointer text-Very-dark-grayish-blue bg-Grayish-blue/35 rounded-md'>
                                                <li className=''>Overview</li>
                                                <li className=''>Pricing</li>
                                                <li className=''>Marketplace</li>
                                                <li className=''>Features</li>
                                                <li className=''>Integrations</li>
                                            </ul>}
                                        </div>
                                        <div>
                                            <button 
                                            onClick={()=>{setMenuCompany(!menuCompany)}}
                                            className='flex items-center mx-auto focus:text-Very-dark-grayish-blue text-Very-dark-blue'
                                            >
                                            Company {menuCompany ? <img src={arrowDark} alt="" className='rotate-180 ml-2'/> : <img src={arrowDark} alt="" className='ml-2'/>}
                                            </button>
                                            {menuCompany && <ul className='flex flex-col my-5 mx-5 py-5 gap-3 cursor-pointer text-Very-dark-grayish-blue bg-Grayish-blue/35 rounded-md'>
                                                <li className=''>About</li>
                                                <li className=''>Team</li>
                                                <li className=''>Blog</li>
                                                <li className=''>Careers</li>
                                            </ul>}
                                        </div>
                                        <div>
                                            <button 
                                            onClick={()=>{setMenuConnect(!menuConnect)}}
                                            className='flex items-center mx-auto focus:text-Very-dark-grayish-blue text-Very-dark-blue'
                                            >
                                            Connect {menuConnect ? <img src={arrowDark} alt="" className='rotate-180 ml-2'/> : <img src={arrowDark} alt="" className='ml-2'/>}
                                            </button>
                                            {menuConnect && <ul className='flex flex-col my-5 mx-5 py-5 gap-3 cursor-pointer text-Very-dark-grayish-blue bg-Grayish-blue/35 rounded-md'>
                                                <li className=''>Contact</li>
                                                <li className=''>Newsletter</li>
                                                <li className=''>LinkedIn</li>
                                            </ul>}
                                        </div>
                                        <hr className='h-[1px] border-0 bg-Grayish-blue/50 mx-5' />
                                        <div className='flex flex-col mx-auto gap-5 mb-8'>
                                            <button className='text-Very-dark-blue'>Login</button>
                                            <button className='bg-gradient-to-r from-Very-light-red to-Light-red active:text-Very-dark-desaturated-blue/50 rounded-full w-fit px-10 py-3 text-White'>Sign Up</button>
                                        </div>

                                    </div>
                                    )}
                            </div>
                        </section>
                        {/* end = mobile nav view */}
                    </div>
                </main>
            </nav>

            <article className='flex flex-col items-center lg:pb-20 pb-32'>
                <div className='text-center text-White flex flex-col xl:gap-10 lg:gap-5 lg:py-10'>
                    <h1 className='hidden lg:block font-Overpass lg:font-bold font-light lg:text-5xl text-4xl'>A modern publishing platform</h1>
                    <div className='lg:hidden pt-32 pb-5'>
                        <h1 className='font-Overpass font-light text-4xl pb-2'>A modern</h1>
                        <h1 className='font-Overpass font-light text-4xl'>publishing platform</h1>
                    </div>
                    <h3 className='font-Overpass px-10'>Grow your audience and build your online brand</h3>
                    <div className='font-Ubuntu font-medium flex gap-10 mx-auto pt-10'>
                        <button className='rounded-full cursor-pointer px-5 py-3 bg-White hover:text-White hover:bg-White/25 text-Light-red'>Start for Free</button>
                        <button className='px-5 py-3 hover:rounded-full hover:bg-White  hover:text-Light-red'>Learn More</button>
                    </div>
                </div>
            </article>
        </div>
        
    </>
  )
}

export default navbar