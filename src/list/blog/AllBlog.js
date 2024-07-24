import blog1 from '../../images/blog1.png';
const AllBlog = () => {
  return <>
  <h1 className="font-semibold text-2xl mx-40">All Blog Posts</h1> 
  <div>
    <div className='flex mt-10 space-x-4 mr-32'>
        <div className="ml-36 ">
            <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">Leadership</button>
                <button className="bg-gray-100 text-gray-700 w-28 rounded-full h-8 ml-3 font-semibold">Management</button>
            </div>
        </div>
        <div>
        <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-teal-100 w-28 text-teal-600 h-8 rounded-full font-semibold">Product</button>
                <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">Research</button>
                <button className="bg-red-100 text-red-600 w-28 rounded-full h-8 ml-3 font-semibold">Frameworks</button>
            </div>
        </div>
        <div className='mr-36'>
            <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">Design</button>
                <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">Research</button>
            </div>
            </div>
    </div>
    <div className='flex mt-10 space-x-4 mr-32'>
        <div className="ml-36 ">
            <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">Leadership</button>
                <button className="bg-gray-100 text-gray-700 w-28 rounded-full h-8 ml-3 font-semibold">Management</button>
            </div>
        </div>
        <div>
        <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-teal-100 w-28 text-teal-600 h-8 rounded-full font-semibold">Product</button>
                <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">Research</button>
                <button className="bg-red-100 text-red-600 w-28 rounded-full h-8 ml-3 font-semibold">Frameworks</button>
            </div>
        </div>
        <div className='mr-36'>
            <img src={blog1} alt='blog image'></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">Like to know the screts of transfornimg a 2-14 team itno a 3x Super Bowl winning Dynasty?</p>
            <div className='flex pt-3'> 
                <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">Design</button>
                <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">Research</button>
            </div>
            </div>
    </div>
  </div>
  <div className='bg-slate-200 w-5/6 ml-36  h-px mt-10 '></div>
  <div className='flex justify-evenly mt-5'>
    <div>
        <p className='text-gray-500'>Previous</p>
    </div>
    <div>
        <p className='text-gray-500'>1 2 3 ... 8 9</p>
    </div>
    <div>
        <p className='text-gray-500'>Next</p>
    </div>
  </div>
  </>;
};
export default AllBlog;
