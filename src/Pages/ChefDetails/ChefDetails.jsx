import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageBanner from '../../components/SingleChefBanner/SinglePageBanner';
import ChefRecipesCard from '../../components/ChefRecipeCard/ChefRecipesCard';

const ChefDetails = () => {
    const [chef, setChef] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://food-point-recipe-server.vercel.app/${id}`)
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])
    



    return (
        <div>
            <SinglePageBanner chef = {chef}/>
            <div className="mt-[10vh] md:mt-[23vh] mb-10">
                <h3 className="text-3xl font-bold text-center mb-5">All Recipes</h3>
                <div className="md:grid grid-cols-2 ui-container gap-5 ">
                    {
                        chef?.recipes && chef.recipes.map((recipeData, idx)=> <ChefRecipesCard recipeData={recipeData} key={idx}/>)
                    }
                </div>
            </div>
        
        </div>
    );
};

export default ChefDetails;