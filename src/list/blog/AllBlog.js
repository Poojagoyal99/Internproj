import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import blog5 from "../../images/blog5.png";
import blog6 from "../../images/blog6.png";
import blog11 from "../../images/blog11.png";
import blog12 from "../../images/blog12.png";
const AllBlog = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl mx-36">Recent Blog Posts</h1>
      <div className="flex space-x-6 mt-10">
        <div className="ml-36 w-2/6 ">
          <img src={blog11} alt="blogImage"></img>
          <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
          <h1 className="font-bold text-xl pt-3">Ujjain</h1>
          <p className="text-gray-500 pt-3">
            Like to know the screts of transfornimg a 2-14 team itno a 3x Super
            Bowl winning Dynasty?
          </p>
        </div>
        <div className="mr-36 flex space-x-4">
            <div>
          <img src={blog12} alt="blogImage" className="h-80"></img></div>
          <div className="w-48 mr-32">
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Design
              </button>
              <button className="bg-pink-100 text-pink-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Research
              </button>
              </div>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-2xl mx-36 mt-10">All Blog Posts</h1>
      <div>
        <div className="flex mt-10 space-x-4 mr-32">
          <div className="ml-36 ">
            <img src={blog1} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Leadership
              </button>
              <button className="bg-gray-100 text-gray-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Management
              </button>
            </div>
          </div>
          <div>
            <img src={blog2} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-teal-100 w-28 text-teal-600 h-8 rounded-full font-semibold">
                Product
              </button>
              <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Research
              </button>
              <button className="bg-red-100 text-red-600 w-28 rounded-full h-8 ml-3 font-semibold">
                Frameworks
              </button>
            </div>
          </div>
          <div className="mr-36">
            <img src={blog3} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Design
              </button>
              <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Research
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-20 space-x-4 mr-32">
          <div className="ml-36 ">
            <img src={blog4} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Design
              </button>
              <button className="bg-blue-100 text-blue-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Research
              </button>
            </div>
          </div>
          <div>
            <img src={blog5} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-green-100 min-w-28 text-green-600 min-h-8 rounded-full font-semibold">
                Software Development
              </button>
              <button className="bg-pink-100 text-pink-700 w-28 rounded-full h-8 ml-3 font-semibold">
                Tools
              </button>
              <button className="bg-red-100 text-red-600 w-28 rounded-full h-8 ml-3 font-semibold">
                SaaS
              </button>
            </div>
          </div>
          <div className="mr-36">
            <img src={blog6} alt="blogImage"></img>
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-gray-500 pt-3">
              Like to know the screts of transfornimg a 2-14 team itno a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Podcast
              </button>
              <button className="bg-gray-100 text-gray-700 w-36 rounded-full h-8 ml-3 font-semibold">
                Customer Success
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-5/6 ml-36  h-px mt-10 "></div>
      <div className="flex justify-evenly mt-5">
        <div>
          <p className="text-gray-500">Previous</p>
        </div>
        <div>
          <p className="text-gray-500">1 2 3 ... 8 9</p>
        </div>
        <div>
          <p className="text-gray-500">Next</p>
        </div>
      </div>
    </>
  );
};
export default AllBlog;
