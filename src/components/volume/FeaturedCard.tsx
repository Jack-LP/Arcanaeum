import FeaturedItem from './FeaturedItem';

const FeaturedCard = () => {
  return (
    <div className='flex flex-col gap-5 bg-charcoal-200 rounded-md p-5'>
      <h2 className='font-semibold text-xl'>Featured</h2>
      <div className='flex justify-between'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>
  );
};
export default FeaturedCard;
