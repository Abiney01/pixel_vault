const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-40">
      <div className="relative w-12 h-12">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-3 w-[2px] bg-white rounded-full origin-bottom animate-fade"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-18px)`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
