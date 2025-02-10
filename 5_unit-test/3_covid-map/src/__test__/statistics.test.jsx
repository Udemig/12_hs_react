import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { totalApi } from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";

/* 
* Yazıcağımız testler kesinlikle api isteklerine bağımlı olmamalı, yani api'dan gelecek cevap testin geçip geçememe durumunu etkilememli

* api isteği atan fonksiyonu mock'layıp api'dan gelicek cevapları kendimiz belirliyicez bu sayede component api isteklerini düzgün bir şekilde ele alıyo mu test etmiş olucaz hemde gerçek api'la olan bağlantıyı tamamen koparıcaz
*/

// api isteğini atan fonksiyonu mock'la
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("istatistik component testleri", () => {
  // her testten önce bütün mock'ları temizle
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir", () => {
    // loader testini yapıcağımız için sahte get fonksiyonun promise döndürmesini istedik
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // ekranda loader component'ı vardır
    screen.getByTestId("loader");
  });

  test("api'den hata geldiğinde ekranda hata mesajı yazar", async () => {
    // error testini yapıcağımız için sahte get fonksiyonun hata döndürmesini istedik
    totalApi.get.mockRejectedValue(new Error("404 hatası"));

    // bileşeni renderla
    render(<Statistics />);

    // bellirli bir sürenini ardından ekrana hata basılır
    await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
  });

  test("api'den cevap geldiğinde ekrana veriler basılır", async () => {
    // verilerin testini yapıcağımız için sahte get fonksiyonun verileri döndürmesini istedik
    totalApi.get.mockResolvedValue({ data: { data: totalData } });

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // toplam vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.confirmed));

    // aktif vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.active));

    // toplam vefat sayısı ekrana basılır
    screen.getByText(millify(totalData.deaths));
  });
});
