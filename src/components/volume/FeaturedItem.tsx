import { ClockFill } from 'react-bootstrap-icons';

const FeaturedItem = () => {
  return (
    <div className='relative w-[471px] h-[253px] flex items-end'>
      <img className='absolute' src='/img/featuredItem.jpg' alt='' />
      <div className='absolute bg-gradient-to-t from-black/60 to-transparent w-full h-full'></div>
      <div className='absolute top-5 right-5 flex items-center gap-1'>
        <p>24m</p>
        <ClockFill />
      </div>
      <div className='z-10 p-5'>
        <h3 className='text-xl'>A Dance in Fire</h3>
        <h4 className='text-white/60'>Waughin Jarth</h4>
      </div>
    </div>
  );
};
export default FeaturedItem;
