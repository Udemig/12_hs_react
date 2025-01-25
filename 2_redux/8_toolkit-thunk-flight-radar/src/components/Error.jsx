const Error = ({ message }) => {
  return (
    <div className="error">
      <p>Uçuş verileri alınamadı</p>

      <p>{message}</p>
    </div>
  );
};

export default Error;
