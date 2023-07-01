import { Link } from 'react-router-dom';

interface Props {
  location: {
    pathname: string;
  };
}

const Sidebar = ({ location }: Props) => {
  const currentPath = location.pathname;

  const navElements = [
    { title: 'Home', path: '/' },
    { title: 'Volume I', path: '/volume/1' },
    { title: 'Volume II', path: '/volume/2' },
    { title: 'Volume III', path: '/volume/3' },
    { title: 'Authors', path: '/authors' },
    { title: 'Random', path: '' },
  ];

  return (
    <div className='flex flex-col gap-10 font-crimson w-32'>
      <ul className='flex flex-col gap-2'>
        {navElements.map((item) => (
          <Link to={item.path}>
            <li
              className={`${
                currentPath === item.path
                  ? `bg-teal text-charcoal-100`
                  : `bg-transparent`
              } rounded-md pl-2 cursor-pointer`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className='flex flex-col gap-2'>
        <p className='uppercase text-white/25 text-sm font-inter'>
          Book Circles
        </p>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <div className='w-[11px] h-[11px] rounded-full border-2 border-[#3c4982]'></div>
            <a href=''>Dwemer</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
