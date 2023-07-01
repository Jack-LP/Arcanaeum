import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import FeaturedCard from '../components/volume/FeaturedCard';

const Volume = () => {
  const { libraryData } = useContext(DataContext);
  const params = useParams();

  const volumeData = libraryData.filter((item) => item.volume === params.volId);

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
