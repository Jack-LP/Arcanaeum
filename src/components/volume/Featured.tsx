import FeaturedCard from './FeaturedCard';

const Featured = ({ volumeData }) => {
  const featuredList: Array<object> = volumeData
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const bookCovers = Array(10).fill(0).map(Number.call, Number);

  const featuredImages = bookCovers.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className='flex flex-col gap-5 bg-charcoal-200 rounded-md p-5'>
      <h2 className='font-semibold text-xl'>Featured</h2>
      <div className='flex justify-between'>
        {featuredList.map((book, i) => (
          <FeaturedCard
            key={book.title}
            book={book}
            image={featuredImages[i]}
          />
        ))}
      </div>
    </div>
  );
};
export default Featured;
