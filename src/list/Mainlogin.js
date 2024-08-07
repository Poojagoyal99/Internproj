import loginImg1 from '../images/loginImg1.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Mainlogin=() =>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/Home');
  };

    return(
<div className="bg-customSkin min-h-screen flex items-center justify-center p-4 md:p-0">
    <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        <div className="w-full md:w-1/2">
            <img src={loginImg1} alt="Placeholder" className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="w-full md:w-1/2 p-8">
            <h2 className="text-xl font-bold mb-6 text-center">LOGIN</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-5">
                    <label htmlFor="email" className="block font-semibold text-gray-500">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your Email here" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 pl-8 border bg-gray-300 rounded-xl mt-2" 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block font-semibold text-gray-500">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password here" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 pl-8 border bg-gray-300 rounded-xl mt-2" 
                    />
                </div>
                <div className="mb-5 mt-10 text-center">
                    {error && <p className="text-red-500">{error}</p>}
                    <button 
                        type="submit" 
                        className="w-2/6 md:w-3/6 bg-customBrown text-white py-2 rounded-lg"
                        onClick={navigateToAbout}>
                        LOGIN
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-400">- OR -</p>
                    <div className="mt-5 flex justify-center">
                        <button className="w-3/6  bg-white text-gray-500 py-2 mt-2 border border-black rounded-xl flex items-center justify-center">
                            <img src="/google-logo.png" alt="Google logo" className="w-7 h-8 mr-1" />
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

    );
}
export default Mainlogin;