import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Ayarlar</h1>} />
        <Route path="/news" element={<h1>Haberler</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
