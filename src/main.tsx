import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DataWrapper } from './context/DataContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DataWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataWrapper>
);
