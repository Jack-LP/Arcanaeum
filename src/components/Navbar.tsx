import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='flex items-center py-4 gap-32 mx-10 border-b-2 border-white/10'>
      <h1>Logo</h1>
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
