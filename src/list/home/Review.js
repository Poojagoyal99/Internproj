import r1 from '../../images/rew1.png';
import r2 from '../../images/rew2.png';
function Review() {
    return (
        <>
        <div className="mx-20 my-20" >
            <h1 className="font-bold text-customBrown text-3xl text-center">What our Customers Say?</h1>
            <div className="flex">
              <div className='my-14 w-5/6 ml-10'>
              <img src={r1} alt='imageRew'></img>
              </div>
              <div className='my-14 w-5/6'>
              <img src={r2} alt='imageRew'></img>
              </div>
            </div>
        </div>
        </>
    );
}
export default Review;