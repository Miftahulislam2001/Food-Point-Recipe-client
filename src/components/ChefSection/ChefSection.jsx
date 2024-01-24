import React, { useContext } from 'react';
import { ApiContext } from '../../provider/ApiDataProvider';
import Chef from '../Chef/Chef';

const ChefSection = () => {
    const {chefs} = useContext(ApiContext)
  
    return (
        <div className="my-[140px] my-container " id="our-chefs">
             <h2 className="text-left text-5xl font-serif font-bold">Meet Our Best <span className='text-[#900000]'>Chefs</span></h2>
           
             <hr class=" border-2 border-[#ae2f2f]  my-2 w-[15%] "/>
             <hr class=" border-2 border-[#ae2f2f]  w-[10%] "/>
             <section className="grid md:grid-cols-2 gap-5 mt-10">

            {
                chefs.map(chef => <Chef chef={chef} key={chef._id}/>)
            }
             </section>
        </div>
    );
};

export default ChefSection;