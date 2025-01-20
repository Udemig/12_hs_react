import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal/index";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Map />} />

        <Route path="/list" element={<List />} />
      </Routes>

      <Modal />
    </BrowserRouter>
  );
};

export default App;
