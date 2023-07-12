import Hero from '../components/home/Hero';
import BrowseCard from '../components/home/BrowseCard';

const Home = () => {
  const volumes = ['1', '2', '3'];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <Hero />
      <BrowseCard volumes={volumes} />
    </div>
  );
};
export default Home;
