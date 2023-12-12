import { useNavigate } from 'react-router-dom';

const ManClothes = ({ apiData }) => {
  const navigate = useNavigate();

  const filteredData = apiData.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <div className='bg-manpage bg-no-repeat bg-cover bg-center  h-40 md:h-60 lg:h-80 flex  items-center '>
        {/* <Header /> */}
        <button
          onClick={() => navigate(-1)}
          type='button'
          className=' flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          <svg
            class='w-5 h-5 rtl:rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          <span>Go back</span>
        </button>
        Hi
      </div>
      <div className=''>
        {filteredData.map((product) => (
          <div>
            <div key={product.id} />
            <div class='grid grid-cols-4 gap-3 m-10'>
              <img
                src={product.image}
                alt={product.title}
                className='object-scale-down  h-48 w-96'
              />
              <div className='flex justify-center items-center text-xl col-span-3'>
                <p>{product.title}</p>
              </div>
            </div>
          </div>
        ))}
        <div class='top-0 absolute right-3 top p-2'>
          <div class='t-0 absolute left-3'>
            {/* <p class='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
              {numberOfItems}
            </p> */}
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='file: mt-4 h-6 w-6'
            onClick={() => navigate('/cart')}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ManClothes;
