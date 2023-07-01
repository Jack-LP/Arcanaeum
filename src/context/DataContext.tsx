import { createContext } from 'react';
import libraryData from '../data/arcanaeum-data.json';

const DataContext = createContext(null);

interface Props {
  children: React.ReactNode;
}

export const DataWrapper = ({ children }: Props) => {
  return (
    <DataContext.Provider value={{ libraryData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
