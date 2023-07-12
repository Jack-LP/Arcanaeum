import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Featured from '../components/volume/Featured';
import ChapterCard from '../components/volume/ChapterCard';

const Volume = () => {
  const { libraryData } = useContext(DataContext);
  const params = useParams();

  const volumeData = libraryData.filter((item) => item.volume === params.volId); // Filters data down to specific volume
  const chapterData = Array.from(new Set(volumeData.map((obj) => obj.chapter))); // Returns array of chapter titles

  return (
    <div className='flex flex-col gap-5 w-full'>
      <h1 className='text-2xl font-semibold'>{`Volume ${'I'.repeat(
        params.volId
      )} - The Histories`}</h1>
      <Featured volumeData={volumeData} />
      {chapterData.map((chapter) => (
        <ChapterCard
          chapterData={volumeData.filter((item) => item.chapter === chapter)}
          chapterTitle={chapter}
          volId={params.volId}
        />
      ))}
    </div>
  );
};
export default Volume;
