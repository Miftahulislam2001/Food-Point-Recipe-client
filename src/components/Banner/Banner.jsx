import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="mx-4 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl  carousel h-[85vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://themelooper.com/html/foodpoint/images/banner-img-4.jpg" className="w-full object-cover h-[85vh] " style={{ opacity: 1 }} />
                    <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-3xl font-bold mb-2">Discover Exquisite Flavors</h2>
                        <p className="text-lg">Embark on a culinary journey and savor the finest dishes crafted with passion and expertise.</p>
                        <button className='btn bg-[#900000] my-3 rounded-none px-6 border-none text-white  text-xl font-semibold font-serif'>Check Out</button>
                    </div>
                    <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://themelooper.com/html/foodpoint/images/banner-img-3.jpg" className="w-full object-cover h-[85vh] opacity-[3]" />
                    <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-3xl font-bold mb-2">Relaxation in Nature's Embrace</h2>
                        <p className="text-lg">Indulge in serenity with breathtaking views and peaceful surroundings, providing a perfect escape from the hustle and bustle.</p>
                        <button className='btn bg-[#900000] my-3 rounded-none px-6 border-none text-white  text-xl font-semibold font-serif'>Check Out</button>
                    </div>
                    <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://themelooper.com/html/foodpoint/images/banner-img-2.jpg" className="w-full object-cover h-[85vh] opacity-[3]" />
                    <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-3xl font-bold mb-2">Relaxation in Nature's Embrace</h2>
                        <p className="text-lg">Indulge in serenity with breathtaking views and peaceful surroundings, providing a perfect escape from the hustle and bustle.</p>
                        <button className='btn bg-[#900000] my-3 rounded-none px-6 border-none text-white  text-xl font-semibold font-serif'>Check Out</button>
                    </div>
                    <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full object-cover h-[85vh]" style={{ opacity: 3 }} />
                    <div className="carousel-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-3xl font-bold mb-2">Unleash Your Inner Explorer</h2>
                        <p className="text-lg">Embark on thrilling adventures, discover new horizons, and create stories that last a lifetime.</p>
                        <button className='btn bg-[#900000] my-3 rounded-none px-6 border-none text-white  text-xl font-semibold font-serif'>Check Out</button>
                    </div>
                    <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;