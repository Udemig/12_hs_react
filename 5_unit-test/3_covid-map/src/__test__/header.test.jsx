import { render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockData } from "../utils/constants";

// redux kullanılan bileşenler için sahte store'lar oluşturumızı sağlayacak fonksiyonun kurulumunu yap
const mockStore = configureStore([thunk]);

// Eğer component'ın içerisinde bir sağlayıcıya bağlı fonksiyon / element çağırılıyorsa test ederkende sağlayı ile sarmalamalıyız
it("store yüklenme durumundayken ekrana loader basılır", () => {
  // bu test senaryosuna uygun sahte bir store oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });

  // bileşeni render et
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader var mı?
  screen.getByTestId("header-loader");
});

it("store yüklenme bittiğinde ekranda loader yoktur", () => {
  // bu test senaryosuna uygun sahte bir store oluştur
  const store = mockStore({ isLoading: false, error: null, data: null });

  // bileşeni render et
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader yoktur
  const loader = screen.queryByTestId("header-loader");
  expect(loader).toBeNull();
});

it("store'a veri geldiğinde ekrana ülke ve bayrak basılır", () => {
  // bu test senaryosuna uygun sahte bir store oluştur
  const store = mockStore({ isLoading: false, error: null, data: mockData });

  // bileşeni render et
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekranda mı?
  screen.getByRole("heading", { name: mockData.country });

  // resim ekranada mı?
  const img = screen.getByAltText(mockData.flag.alt);

  // resmin kaynağı (src) doğru mu?
  expect(img).toHaveAttribute("src", mockData.flag.png);
});
