import { Search } from 'react-bootstrap-icons';

const Searchbar = () => {
  return (
    <div className='relative'>
      <Search className='absolute top-3 left-3 text-white/20' />
      <input
        className='bg-transparent border-2 outline-none border-white/10 rounded-md pl-9 h-10 w-[470px]'
        type='text'
        placeholder='Search...'
      />
    </div>
  );
};
export default Searchbar;
