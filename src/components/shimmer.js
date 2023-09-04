const Shimmer = () => {
    return (
      <div className="flex flex-wrap">
        {Array(19)
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-1/4 p-4">
              <div className="w-full h-40 bg-gray-300 animate-pulse"></div>
              <div className="mt-2 w-4/5 h-6 bg-gray-300 animate-pulse"></div>
              <div className="mt-2 w-2/3 h-6 bg-gray-300 animate-pulse"></div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  