import { Link } from 'react-router-dom';
import { ClockFill } from 'react-bootstrap-icons';

const FeaturedCard = ({ book, image }) => {
  const calcReadingTime = (text) => Math.ceil(text.split(' ').length / 200);

  return (
    <Link
      to={`/volume/${book.volume}/${book.title}`}
      className='relative w-[470px] h-[250px] flex items-end rounded-md'
    >
      <img
        className='absolute rounded-md object-cover w-full h-full'
        src={`/img/book-covers/${image}.jpg`}
        alt=''
      />
      <div className='absolute rounded-md bg-gradient-to-t from-black/60 to-transparent w-full h-full'></div>
      <div className='absolute top-5 right-5 flex items-center gap-1'>
        <p>{calcReadingTime(book.text)}m</p>
        <ClockFill />
      </div>
      <div className='z-10 p-5'>
        <h3 className='text-xl'>{book.title}</h3>
        <h4 className='text-white/60'>{book.author}</h4>
      </div>
    </Link>
  );
};
export default FeaturedCard;
