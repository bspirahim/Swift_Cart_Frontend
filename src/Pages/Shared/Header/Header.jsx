import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='shadow-sm '>
            <div className='md:flex items-center justify-between  py-4 max-w-screen-lg mx-auto px-3 md:px-0'>

                <div className='flex items-center justify-between gap-x-2'>
                    <div className='flex items-center gap-2'>
                        <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                            <ion-icon name={`${open ? 'close' : 'menu'}`} ></ion-icon>
                        </div>
                        <span className='flex'> <span className='p-0 m-0 text-red-500'><FaCaretDown /></span> <span className='text-2xl font-bold leading-6 text-[#000000]'>Swift <span className='text-red-500'>_</span> Cart</span></span>
                    </div>

                    <div className='flex md:hidden space-x-2'>
                        <img className='w-[32px] h-[32px] text-[#000000]' src="/images/icon/Wishlist.png" alt="" />
                        <img className='w-[32px] h-[32px] text-[#000000]' src="/images/icon/Cart1-with-buy.png" alt="" />
                    </div>
                </div>
                <ul className='md:flex hidden'>
                    <li>
                        <Link className='font-normal text-base leading-6 text-[#000000] mx-3' to=''>Home</Link>
                        <Link className='mx-3 font-normal text-base leading-6 text-[#000000]' to=''>Contact</Link>
                        <Link className='mx-3 font-normal text-baseleading-6 text-[#000000]' to=''>About</Link>
                        <Link className='mx-3 font-normal text-base leading-6 text-[#000000]' to=''>Sign Up</Link>
                    </li>
                </ul>

                <div className='md:flex items-center justify-between md:space-x-4'>
                    <div className=' md:w-[243px] w-full py-2'>
                        <form className=''>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="search" className="block w-full py-2 px-3 pe-6 rounded text-[#000000] bg-[#F5F5F5] focus:outline-none font-normal  text-xs" placeholder="What are you loking for?" required />

                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none ">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root UiKitSearchInput_icon text-[#000000]" width="24" height="24" ><defs><symbol id="search-bb6ac" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></g></svg>
                                </div>

                            </div>
                        </form>
                    </div>
                <div className='md:flex hidden md:space-x-2'>
                        <img className='w-[32px] h-[32px] z-50' src="/images/icon/Wishlist.png" alt="" />
                        <img className='w-[32px] h-[32px] z-50' src="/images/icon/Cart1-with-buy.png" alt="" />
                    </div>
                </div>





                {/*mobile device*/}
                <ul className={`
                md:hidden bg-red-500 absolute w-3/4 h-full bottom-0 py-20 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                
                `}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
            <hr />
        </nav>
    );
};

export default Header;