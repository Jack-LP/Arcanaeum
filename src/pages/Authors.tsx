import { useContext } from 'react';
import DataContext from '../context/DataContext';
import AuthorCard from '../components/authors/AuthorCard';

const Authors = () => {
  const { libraryData } = useContext(DataContext);

  const authorNames = libraryData.map((book) => book['author']); // Returns array of all name occurrences
  const authorList = Array.from(new Set(libraryData.map((obj) => obj.author))); // Returns array of all Authors

  return (
    <div className='flex flex-col gap-5 w-full'>
      <h1 className='text-2xl font-semibold'>Authors</h1>
      <div className='border-y-2 py-1 px-2 border-white/10'>Sort: Name</div>
      <div className='flex flex-wrap gap-5 justify-between'>
        {authorList.map((item, i) => (
          <AuthorCard author={authorList[i]} authorNames={authorNames} />
        ))}
      </div>
    </div>
  );
};
export default Authors;
