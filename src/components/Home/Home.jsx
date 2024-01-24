import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import About from '../About/About';
import RecipeCategory from '../RecipeCategory/RecipeCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <RecipeCategory/>
            <ChefSection/>
        </div>
    );
};

export default Home;