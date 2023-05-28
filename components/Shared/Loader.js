const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <img src="/images/home/logo_white.png" className="w-[200px]" />
        </div>
      )}
    </>
  );
};

export default Loader;
