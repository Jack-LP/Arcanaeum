import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  const volumes = ['vol-1', 'vol-2', 'vol-3'];

  return (
    <div className='bg-charcoal-100 w-screen min-h-screen text-white font-inter px-10 flex flex-col gap-20'>
      <Navbar />
      <div className='flex gap-[50px]'>
        <Sidebar />
        {/* Main content */}
        <div className='flex flex-col gap-5 w-full'>
          <Hero />
          <div className='flex flex-col gap-5 bg-charcoal-200 p-5 rounded-md'>
            <h2 className='text-xl font-semibold'>Browse by Volume</h2>
            <div className='flex gap-5'>
              {volumes.map((vol) => (
                <a key={vol} href=''>
                  <img
                    className='w-64 rounded-md hover:scale-[103%] duration-500 ease-in-out'
                    src={`/img/${vol}.jpg`}
                    alt=''
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-charcoal-200 p-5 rounded-md'>
            <h2 className='text-xl font-semibold'>Browse by Author</h2>
            <div className='flex gap-5'>
              {volumes.map((vol) => (
                <a key={vol} href=''>
                  <img
                    className='w-64 rounded-md hover:scale-[103%] duration-500 ease-in-out'
                    src={`/img/${vol}.jpg`}
                    alt=''
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
