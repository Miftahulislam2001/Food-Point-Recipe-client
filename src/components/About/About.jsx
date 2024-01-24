import React from 'react';

const About = () => {
    return (
        <div className='my-container'>
            <h2 className="text-left text-5xl font-serif font-bold">About <span className='text-[#900000]'>FoodPoint</span></h2>
            {/* <hr class=" border-2 border-[#ae2f2f]  my-2 w-[15%] " />
            <hr class=" border-2 border-[#ae2f2f]  w-[10%] " /> */}

            <p className='text-justify mt-3 text-slate-500'>
            Food Point Pizza version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
            </p>
        </div>
    );
};

export default About;