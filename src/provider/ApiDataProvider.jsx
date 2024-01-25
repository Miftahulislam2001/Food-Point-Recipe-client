import React, { createContext, useEffect, useState } from 'react';

export const ApiContext = createContext();

const ApiDataProvider = ({children}) => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('https://food-point-recipe-server.vercel.app')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])

    const ApiData = {
        chefs,
    }

    return (
        <ApiContext.Provider value={ApiData}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiDataProvider;