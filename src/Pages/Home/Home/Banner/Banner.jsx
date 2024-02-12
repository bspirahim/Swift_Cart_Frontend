import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='max-w-screen-lg mx-auto '>
            <div className='grid grid-cols-4'>
                <div className=" border-r mt-5">
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Woman's Fashion </a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Men's Fashion </a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Electronics </a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Medicine </a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Sports & Outdoor </a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Baby's & Toys</a></li></Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Groceries & Pets</a></li> </Link>
                <Link><li className='list-none font-normal text-base leading-6'><a href="">Health & Beauty</a></li> </Link>   
                
                </div>
                <div className="row-span-3 col-span-3">
                    <div className=''>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="grid md:grid-cols-2 mt-5 ms-5 bg-[rgb(0,0,0)] w-full h-80">
                                    <div className='text-[#FAFAFA] m-auto'>
                                        <div className='flex items-center space-x-2'>
                                            <img className='w-10 h-12' src="/images/banner/apple.png" alt="" />
                                            <p className='font-normal text-base leading-6'>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <img className='w-4 h-3.5' src="/images/banner/right-arrow.png" alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img className='w-full m-auto text-[#FAFAFA]' src="/images/banner/banner.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid md:grid-cols-2 mt-5 ms-5 bg-[rgb(0,0,0)] w-full h-80">
                                    <div className='text-[#FAFAFA] m-auto'>
                                        <div className='flex items-center space-x-2'>
                                            <img className='w-10 h-12' src="/images/banner/apple.png" alt="" />
                                            <p className='font-base text-sm leading-6'>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <img className='w-4 h-3.5' src="/images/banner/right-arrow.png" alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img className='w-full m-auto text-[#FAFAFA]' src="/images/banner/banner.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid md:grid-cols-2 mt-5 ms-5 bg-[rgb(0,0,0)] w-full h-80">
                                    <div className='text-[#FAFAFA] m-auto'>
                                        <div className='flex items-center space-x-2'>
                                            <img className='w-10 h-12' src="/images/banner/apple.png" alt="" />
                                            <p className='font-base text-sm leading-6'>iPhone 14 Series</p>
                                        </div>
                                        <h1 className='tracking-normal leading-normal font-semibold text-5xl'>Up to 10% <br /> off Voucher</h1>
                                        <div className='flex items-center space-x-2'>
                                            <p className='font-medium text-sm leading-6 border-b'>Shop Now</p>
                                            <img className='w-4 h-3.5' src="/images/banner/right-arrow.png" alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img className='w-full m-auto text-[#FAFAFA]' src="/images/banner/banner.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;