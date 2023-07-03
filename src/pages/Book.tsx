import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Title from '../components/Book/Title';
import Text from '../components/Book/Text';

const Book = () => {
  const { libraryData } = useContext(DataContext);

  const params = useParams();
  const volumeData = libraryData.filter((book) => book.volume === params.volId);
  const bookData = volumeData.filter((book) => book.title === params.bookId)[0];

  return (
    <div className='flex flex-col gap-5'>
      <Title
        title={bookData.title}
        author={bookData.author}
        desc={bookData.description}
      />
      <Text text={bookData.text} />
    </div>
  );
};
export default Book;
