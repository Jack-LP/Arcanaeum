interface Props {
  title: string;
  author: string;
  desc: string;
}

const Title = ({ title, author, desc }: Props) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <span>&#x2022;</span>
        <h3 className='text-sm font-semibold'>{author}</h3>
      </div>
      <h2 className='text-white/60'>{desc}</h2>
    </div>
  );
};
export default Title;
