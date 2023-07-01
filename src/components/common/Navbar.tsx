import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center py-4 gap-32 border-b-2 border-white/10 mb-20'>
      <Link to={'/'}>Arcaneaum</Link>
      <Searchbar />
      <img
        className='rounded-full ml-auto'
        src='https://picsum.photos/45/45'
        alt='User avatar'
      />
    </div>
  );
};
export default Navbar;
