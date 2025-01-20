const Error = ({ message }) => {
  return (
    <div className="error">
      <p>Detay verileri alınamadı</p>

      <p>{message}</p>
    </div>
  );
};

export default Error;
