import { render, screen } from "@testing-library/react";
import Content from "../pages/detail/content";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mockData } from "../utils/constants";

// sahte store oluşturmaya yarayan fonksiyonu kur
const mockStore = configureStore();

test("store yüklenme durumundayken ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("content-loader");
});

test("store hata durumundayken ekrana error gelir", () => {
  const store = mockStore({ isLoading: false, error: "İnternetiz çok yavaş", data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByTestId("error");
});

test("store'a veri geldiğinde nesnedeki her bir değer için kart basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: mockData,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockData).filter(([key]) => key !== "flag");

  // dizideki her değer için kar içerisinde bilgiler basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri basılıyor mu?
    screen.getByText(item[0]);

    // ekrana item'ın value değeri basılıyor mu?
    screen.getByText(item[1]);
  });
});
