import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-gray text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
