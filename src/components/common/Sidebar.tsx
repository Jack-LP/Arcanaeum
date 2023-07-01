const Sidebar = () => {
  return (
    <div className='flex flex-col gap-10 font-crimson w-32'>
      <ul className='flex flex-col gap-2'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Volume I</a>
        </li>
        <li>
          <a href=''>Volume II</a>
        </li>
        <li>
          <a href=''>Volume III</a>
        </li>
        <li>
          <a href=''>Authors</a>
        </li>
        <li>
          <a href=''>Random</a>
        </li>
      </ul>
      <div className='flex flex-col gap-2'>
        <p className='uppercase text-white/25 text-sm font-inter'>
          Book Circles
        </p>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <div className='w-[11px] h-[11px] rounded-full border-2 border-[#3c4982]'></div>
            <a href=''>Dwemer</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
