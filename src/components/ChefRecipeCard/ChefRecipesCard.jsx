import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ChefRecipesCard = ({ recipeData }) => {
    const { food_image, recipe_name, cooking_method, ratings } = recipeData;
    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () =>{
        toast.success('Add in Favorite Recipe ! 🔥')
        setFavorite(true)

    }

    return (
        <article className="p-4 rounded border w-full">
            <img className="w-full h-[450px] rounded object-cover" src={food_image} alt="" />
            <div className="text-center">
                <h3 className=" text-xl font-bold my-3">{recipe_name}</h3>
                <p className=" my-2"><span className="font-bold">ratings</span> : {ratings}</p>
                <button onClick={handleFavorite} disabled={favorite}  className='w-[150px] py-3 rounded text-white my-2 btn bg-[#900000]'>Favorite</button>
                <div className="border p-4 rounded">
                    <span className="font-bold text-xl ">ingredient : </span>
                    <div className="md:flex gap-3 flex-wrap items-center justify-center">
                        {
                            recipeData?.ingredient && recipeData.ingredient.map((ingredient, idx)=> <span key={idx}>{ingredient}</span>)
                        }
                    </div>
                </div>
                <div className="my-5">
                    <p> <span className="font-bold text-xl">Cooking Method :</span> {cooking_method} </p>
                </div>


            </div>
        </article>
    );
};

export default ChefRecipesCard;