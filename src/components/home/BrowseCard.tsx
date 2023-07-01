import { Link } from 'react-router-dom';

interface Props {
  volumes: string[];
}

const Browse = ({ volumes }: Props) => {
  return (
    <div className='flex flex-col gap-5 bg-charcoal-200 p-5 rounded-md'>
      <h2 className='text-xl font-semibold'>Browse by Volume</h2>
      <div className='flex gap-5'>
        {volumes.map((vol) => (
          <Link key={vol} to={`/volume/${vol}`}>
            <img
              className='w-64 rounded-md hover:scale-[103%] duration-500 ease-in-out'
              src={`/img/vol-${vol}.jpg`}
              alt=''
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Browse;
