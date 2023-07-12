import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import Volume from './pages/Volume';
import Book from './pages/Book';
import Authors from './pages/Authors';

function App() {
  const location = useLocation();
  return (
    <div className='bg-charcoal-100 w-screen min-h-screen text-white font-inter px-10'>
      <Navbar />
      <div className='flex gap-[75px]'>
        <Sidebar location={location} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/volume/:volId' element={<Volume />} />
          <Route path='/volume/:volId/:bookId' element={<Book />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
