import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import ErrorImg from "../../assets/Images/error-img.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
    <div className='grid place-items-center h-screen'>
            <section className='w-[70%] h-[70vh] p-16 bg-[#701414] text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                {/* <img className='h-[50vh]' src={ErrorImg} alt="" /> */}
                <Lottie animationData={ErrorImg} loop={true} />
                <div className='max-w-md text-center'>
                    <p className=' font-semibold md:text-xl text-white mb-8'>
                        {error?.message}
                    </p>
                    <Link className="text-white w-full p-2 text-[21px] rounded mt-[10px]" to='/' >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ErrorPage;