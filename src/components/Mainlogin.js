import loginImg1 from '../images/loginImg1.png';

function Mainlogin() {
    return(
<div className="bg-customSkin h-screen flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full h-80px">
                    <div className="w-1/2 hidden md:block">
                        <img src={loginImg1} alt="Placeholder" className="object-cover w-full h-full rounded-l-lg" />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-xl font-bold mb-6 text-center">LOGIN</h2>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="email" className="block font-semibold text-gray-500">Email</label>
                                <input type="email" id="email" placeholder="Enter your Email here" className="w-full p-2 pl-8 border bg-gray-300 rounded-xl mt-2" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block font-semibold text-gray-500">Password</label>
                                <input type="password" id="password" placeholder="Enter your password here" className="w-full p-2 pl-8 border bg-gray-300 rounded-xl mt-2" />
                            </div>
                            <div className="mb-5 mt-10 text-center">
                                <button type="submit" className="w-3/6 bg-customBrown text-white py-2 rounded-lg">LOGIN</button>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl text-gray-400">- OR -</p>
                                <div className="mt-5 flex justify-center">
                                <button className="w-3/6 bg-white text-gray-500 py-2  mt-2 border border-black rounded-xl flex items-center justify-center">
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