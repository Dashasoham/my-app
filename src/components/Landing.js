import img1 from '../media/pexels-photo-12149736.jpg';
import img2 from '../media/pexels-photo-9952074.jpg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  let navigate = useNavigate();

  const handleClickManCollection = () => {
    navigate(`/manclothing`);
  };
  const handleClickWomanCollection = () => {
    navigate(`/womanclothing`);
  };

  return (
    <section>
      {/* <Header /> */}
      <div className='bg-landing bg-no-repeat bg-cover bg-center h-40 md:h-60 lg:h-80 flex  items-center'>
        <div
          onClick={() => handleClickManCollection()}
          className='bg-stripe hover:bg-background h-12 flex justify-center    items-center p-8 m-auto mb-12  lg:flex-row hover:text-visited'
        >
          <a
            className='hover:bg-background focus:ring-2   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  '
            title='woman'
          >
            For Him
          </a>{' '}
        </div>
        <div
          onClick={() => handleClickWomanCollection()}
          className='bg-stripe hover:bg-background h-12 flex justify-center    items-center p-8 m-auto mb-12  lg:flex-row hover:text-visited'
        >
          <a
            className=' focus:ring-2   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 '
            title='woman'
          >
            For Her
          </a>
        </div>

        {/* <img className='bg-landing max-w-min' /> */}
      </div>{' '}
      <div className='bg-stripe h-12 flex justify-center    items-center p-8 mr-auto  lg:flex-row '>
        <div className=' p-8'>Free shipping</div>
        <div className=' p-8'>Earn points</div>
        <div className=' p-8'>Free returns</div>
      </div>
      <div className='flex justify-center '>
        <img
          src={img2}
          className='m-4 sm:m-6 lg:m-8 max-w-full w-2/3 sm:w-1/2 lg:w-2/5'
        />{' '}
        <img
          src={img1}
          className='m-4 sm:m-6 lg:m-8 max-w-full w-2/3 sm:w-1/2 lg:w-2/5'
        />
      </div>
    </section>
  );
};

export default Landing;
