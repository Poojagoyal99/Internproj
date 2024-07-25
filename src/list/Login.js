import { useState } from 'react';
import loginImg1 from '../images/loginImg1.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: fullName });
            alert('Account created successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/login');
    };

    return (
        <div className="bg-customSkin min-h-screen flex items-center justify-center p-4 md:p-0">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
                <div className="w-full md:w-1/2 hidden md:block">
                    <img src={loginImg1} alt="Placeholder" className="object-cover w-full h-full rounded-l-lg" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-xl font-bold mb-6 text-center">Create your Free Account</h2>
                    <form onSubmit={handleSignup}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block font-semibold text-gray-500">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Enter your Full Name here" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full p-2 pl-8 border bg-gray-300 rounded-xl mt-2" 
                            />
                        </div>
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
                            <button type="submit" className="w-3/6 bg-customBrown text-white py-2 rounded-lg">Create Account</button>
                        </div>
                        <div className="mb-5 text-center">
                            <p className="text-gray-500">Already have an account? <button className="text-yellow-300" onClick={navigateToAbout}>Log in</button></p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl text-gray-400">- OR -</p>
                            <div className="mt-5 flex justify-center">
                                <button className="w-3/6 bg-white text-gray-500 py-2 mt-2 border border-black rounded-xl flex items-center justify-center">
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

export default Login;
