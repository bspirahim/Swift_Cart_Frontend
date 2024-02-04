import React from 'react';

const Header = () => {
    const navOption = <>
        <li><a>Home</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
        <li><a>Signup</a></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Swift_Cart</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className='ps-10 flex-auto'>
                        <form>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="search" className="block w-full md:py-2 px-3 ps-6 rounded text-black bg-[#F5F5F5] focus:outline-none  " placeholder="What are you loking for?" required />

                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none ">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root UiKitSearchInput_icon" width="24" height="24"><defs><symbol id="search-bb6ac" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></g></svg>
                                </div>

                            </div>
                        </form>
                    </div>    
                    <img src="/images/icon/Wishlist.png" alt="" />
                    <img src="/images/icon/Cart1-with-buy.png" alt="" />
                    
                 </div>
            </div>
        </div>
    );
};

export default Header;