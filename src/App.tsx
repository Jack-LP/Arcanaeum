import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='bg-charcoal w-screen h-screen text-white font-inter px-10 flex flex-col gap-20'>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
