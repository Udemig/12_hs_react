import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "17842c80d6msh42b246b360ca309p1b792fjsncf77d29d9f54",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
