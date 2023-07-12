const AuthorCard = ({ author, authorNames }) => {
  let booksAmount = 0;

  for (let i = 0; i < authorNames.length; i++) {
    authorNames[i] === author ? booksAmount++ : null;
  }

  return (
    <div className='w-[300px] h-[100px] bg-charcoal-200 rounded-md flex flex-col justify-end p-3'>
      <div className='flex flex-col'>
        <h2>{author}</h2>
        <h3>{`Books: ${booksAmount}`}</h3>
      </div>
    </div>
  );
};
export default AuthorCard;
