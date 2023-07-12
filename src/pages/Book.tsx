import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Title from '../components/book/Title';
import Text from '../components/book/Text';

const Book = () => {
  const { libraryData } = useContext(DataContext);

  const params = useParams();
  const volumeData = libraryData.filter((book) => book.volume === params.volId);
  const bookData = volumeData.filter((book) => book.title === params.bookId)[0];

  const replaceWithBr = () => {
    return bookData.text.replace(/\n/g, '<br />');
  };

  return (
    <div className='flex flex-col gap-5 w-full'>
      <Title
        title={bookData.title}
        author={bookData.author}
        desc={bookData.description}
      />
      <Text text={bookData.text} replaceWithBr={replaceWithBr} />
      {/* <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} /> */}
    </div>
  );
};
export default Book;
