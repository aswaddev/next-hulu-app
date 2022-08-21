const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center justify-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
