import React from 'react';

const RecipeCategory = () => {
    return (
        <div className='my-container'>
            <h3 className='mt-3 text-[#900000] text-xl font-mono font-semibold text-center'>Choice a Category</h3>
            <h2 className="text-center text-5xl font-serif font-bold mb-5">Recipe <span className='text-[#900000]'>Category</span></h2>
            {/* <hr class=" border-2 border-[#ae2f2f]  my-2 w-[15%] mx-auto" />
            <hr class=" border-2 border-[#ae2f2f] my-2 w-[10%] mx-auto" /> */}

            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-3 mt-14'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative transform hover:rotate-12 hover:scale-100 transition-transform duration-700 ease-in-out'>
                        <img className='rounded-full w-52 hover:opacity-100' src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jgxcsv5cfw86lk4kjvmzkfiaqk7pxv13p38g.jpg" alt="" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 rounded-full"></div>
                    </div>
                    <h3 className='mt-3 text-slate-500 text-xl font-semibold'>Vegetarian</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative transform hover:rotate-12 hover:scale-100 transition-transform duration-700 ease-in-out'>
                        <img className='rounded-full w-52 hover:opacity-100' src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/beef-steak-tomahawk-S3JHQLN-omrts6h2r6ooajb7o7fsckvwj4sv3smiz698m6z25c.jpg" alt="" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 rounded-full"></div>
                    </div>
                    <h3 className='mt-3 text-slate-500 text-xl font-semibold'>Beef</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative transform hover:rotate-12 hover:scale-100 transition-transform duration-700 ease-in-out'>
                        <img className='rounded-full w-52 hover:opacity-100' src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/baked-chicken-breast-9C4F43W-omrrd2rhfvg4fdu0ak0dak66tq4dtitz01xfn44eqo.jpg" alt="" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 rounded-full"></div>
                    </div>
                    <h3 className='mt-3 text-slate-500 text-xl font-semibold'>Chicken</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative transform hover:rotate-12 hover:scale-100 transition-transform duration-700 ease-in-out'>
                        <img className='rounded-full w-52 hover:opacity-100' src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/pecan-pie-tart-in-baking-dish-traditional-festive-9WMXQ3Z-omrtq2c5dlsg64dt0sj08m3kex84sb89opewqs3y5c.jpg" alt="" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 rounded-full"></div>
                    </div>
                    <h3 className='mt-3 text-slate-500 text-xl font-semibold'>Vegetarian</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative transform hover:rotate-12 hover:scale-100 transition-transform duration-700 ease-in-out'>
                        <img className='rounded-full w-52 hover:opacity-100' src="https://149410494.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/appetizer-bruschetta-with-tuna-and-tomatoes-LKA5ZYU-omrs5yczemz943vxo1dqw9tztvscarh3mzggf5azkw.jpg" alt="" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 rounded-full"></div>
                    </div>
                    <h3 className='mt-3 text-slate-500 text-xl font-semibold'>Vegetarian</h3>
                </div>

            </div>
        </div>
    );
};

export default RecipeCategory;