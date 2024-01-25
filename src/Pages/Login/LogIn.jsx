import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
   

    const {signIn, signInWithGoogle, signInWithGitHub} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignInUser = (event) =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
     

        signIn(email, password)
        .then(result =>{
            
            navigate(from, {replace: true})

            form.reset()
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    return (
        <section className='ui-container items-center w-full gap-5'>

            <section className='border rounded-xl p-[25px] mt-10 shadow-3xl mx-auto md:w-1/2'>
                <h2 className='text-center text-3xl'>Login</h2>
                <form onSubmit={handleSignInUser}>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="email" className='text-[17px]'>Email</label>
                        <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="password" className='text-[17px]'>Password</label>
                        <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
                    </div>
                    <p className='text-[#da4747]'>{error && error}</p>
                    <button type='submit' className='bg-[#900000] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Login</button>
                    <p className='mt-[8px] text-center'>New to Food Points ? <Link to="/register" className='text-[#1f81dd]'>Create New Account</Link></p>

                    <div className='flex items-center justify-between mt-[25px] '>
                        <hr className='w-[45%] bg-[#95A0A7]' />
                        <p className='text-[#95A0A7]'>Or</p>
                        <hr className='w-[45%] bg-[#95A0A7]' />
                    </div>
                    <button onClick={signInWithGoogle} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
                    <button onClick={signInWithGitHub} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[10px]'><AiFillGithub className='text-[32px]' /><span>Continue with Github</span></button>
                </form>
            </section>
        </section>
    );
};

export default LogIn;