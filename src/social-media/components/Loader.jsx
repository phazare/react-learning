const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-primary text-center m-5"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
