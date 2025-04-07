// çağrıdlığında bizi 1sn bekleticek asenkron fonksiyon
const delay = async (ms = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default delay;
