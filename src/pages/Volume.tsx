import { useParams } from 'react-router-dom';
import FeaturedCard from '../components/volume/FeaturedCard';

const Volume = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className='flex flex-col gap-5 w-full'>
      <h1 className='text-2xl font-semibold'>{`Volume ${'I'.repeat(
        params.volId
      )} - The Histories`}</h1>
      <FeaturedCard />
    </div>
  );
};
export default Volume;
