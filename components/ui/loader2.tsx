

const Loader = ({size}: {size: number}) => {
  return (
    <div className={`animate-spin size-${size} border-2 border-t-white border-primary rounded-full`}></div>
  );
};

export default Loader;