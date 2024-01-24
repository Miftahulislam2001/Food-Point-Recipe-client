import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { _id, name, image, number_of_recipes, likes, experience } = chef;

    return (
        <div>
            <article className="p-4 rounded border">
                <div className="w-full md:flex gap-2 relative">
                    <div className="h-[270px] w-1/2 object-cover" threshold={0.95}>
                        <img className="h-full w-full object-cover" src={image} alt="chefs" />
                    </div>
                    <div className="md:w-1/2 p-3 text-gray-700">
                        <h2 className="text-xl text-[#900000] font-semibold">{name}</h2>
                        <p className="font-bold my-2">Experience : {experience}</p>
                        <p className="font-bold my-2">Total likes : {likes}</p>
                        <p className="font-bold my-2">recipes : {number_of_recipes}</p>
                        <div className="card-actions justify-end">
                            <Link className="absolute bottom-0 right-0 py-2 px-5 rounded font-semibold text-white mt-3 inline-block bg-[#900000]" to="/">View Recipes</Link>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    );
};

export default Chef;