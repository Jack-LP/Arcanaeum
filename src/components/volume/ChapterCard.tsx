import { Link } from 'react-router-dom';

const ChapterCard = ({ chapterData, chapterTitle, volId }) => {
  return (
    <div className='w-full bg-charcoal-200 p-5 rounded-md'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-xl font-semibold'>{chapterTitle}</h2>
        <ul className='list-inside list-disc flex flex-col items-start'>
          {chapterData.map((item) => (
            <li key={item.title}>
              <Link to={`/volume/${volId}/${item.title}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ChapterCard;
