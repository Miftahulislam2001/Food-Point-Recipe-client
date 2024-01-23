
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext)
    
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.profile.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;

        createUser(email, password)
        .then(result =>{
            console.log(result)
            form.reset()
        })
        .catch(error =>{
            console.log(error);
        })

    }

    return (
        <main className='ui-container md:flex items-center w-full gap-5 h-[90vh]'>

            <section className='border rounded-xl p-[17px] mx-auto md:w-1/2 mt-1 shadow-3xl'>
                <h2 className='text-center text-2xl'>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className='border rounded p-2 text-base' autoComplete='off' placeholder='Name' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="profile">Profile pic url</label>
                        <input type="text" name="profile" id="profile" className='border rounded p-2 text-base' autoComplete='off' placeholder='Profile pic url' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirm-password" className='border rounded p-2 text-base' autoComplete='off' placeholder='Confirm Password' />
                    </div>
                    <p className='text-[#da4747]'></p>
                    <button type='submit' className='bg-[#900000] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Sign Up</button>
                    <p className='mt-[8px] text-center'>Already have an account? <Link to="/login" className='text-[#1f32dd]'>Login</Link></p>


                </form>
            </section>
        </main>
    );
};

export default Register;