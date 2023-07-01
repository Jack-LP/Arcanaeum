import Sidebar from '../components/common/Sidebar';
import Hero from '../components/home/Hero';
import Browse from '../components/home/Browse';

const Home = () => {
  const volumes = ['1', '2', '3'];

  return (
    <div className='flex gap-[50px]'>
      <Sidebar />
      <div className='flex flex-col gap-5 w-full'>
        <Hero />
        <Browse volumes={volumes} />
      </div>
    </div>
  );
};
export default Home;
