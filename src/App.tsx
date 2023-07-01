import { Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Volume from './pages/Volume';

function App() {
  return (
    <div className='bg-charcoal-100 w-screen min-h-screen text-white font-inter px-10'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/volume/:volId' element={<Volume />} />
      </Routes>
    </div>
  );
}

export default App;
