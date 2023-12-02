import img1 from '../media/pexels-photo-12149736.jpg';
import img2 from '../media/pexels-photo-9952074.jpg';
const Landing = () => {
  return (
    <section>
      <div>
        <ul
          className='mr-auto flex flex-col lg:flex-row'
          data-te-navbar-nav-ref
        >
          <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
            <a
              className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
              href='#!'
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Home
            </a>
          </li>
          <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
            <a
              className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
              href='#!'
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Features
            </a>
          </li>
          <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
            <a
              className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
              href='#!'
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Pricing
            </a>
          </li>
          <li className='mb-2 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
            <a
              className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
              href='#!'
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className='bg-landing bg-no-repeat bg-cover bg-center h-40 md:h-60 lg:h-80 flex items-center'>
        {/* <img className='bg-landing max-w-min' /> */}
      </div>{' '}
      <div className='bg-stripe h-12 flex justify-between items-center p-8'>
        <div className='text-white'>Column 1</div>
        <div className='text-white'>Column 2</div>
        <div className='text-white'>Column 3</div>
      </div>
      <div className='flex justify-center '>
        <img
          src={img1}
          className='m-4 sm:m-6 lg:m-8 max-w-full w-2/3 sm:w-1/2 lg:w-2/5'
        />

        <img
          src={img2}
          className='m-4 sm:m-6 lg:m-8 max-w-full w-2/3 sm:w-1/2 lg:w-2/5'
        />
      </div>
    </section>
  );
};

export default Landing;
