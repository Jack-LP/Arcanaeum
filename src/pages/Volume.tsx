import { useParams } from 'react-router-dom';

const Volume = () => {
  const params = useParams();

  return <div>{params.volId}</div>;
};
export default Volume;
