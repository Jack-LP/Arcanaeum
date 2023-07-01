import Hero from '../components/home/Hero';
import Browse from '../components/home/Browse';

const Home = () => {
  const volumes = ['1', '2', '3'];

  return (
    <div className='flex flex-col gap-5 w-full'>
      <Hero />
      <Browse volumes={volumes} />
    </div>
  );
};
export default Home;
