import React from 'react';

const Form = () => {
    return (
        <div className=' md:w-[243px] w-[210px]'>
                        <form className=' md:block'>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="search" className="block w-full py-2 px-3 pe-6 rounded text-black bg-[#F5F5F5] focus:outline-none  text-sm" placeholder="What are you loking for?" required />

                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none ">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root UiKitSearchInput_icon text-[#000000]" width="24" height="24" ><defs><symbol id="search-bb6ac" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></g></svg>
                                </div>

                            </div>
                        </form>
                    </div>
    );
};

export default Form;