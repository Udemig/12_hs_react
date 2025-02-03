import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<h6>Profile</h6>} />
          <Route path="/settings" element={<h6>Ayarlar</h6>} />
          <Route path="/news" element={<h6>Haberler</h6>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
