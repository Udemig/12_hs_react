import { render, screen, waitFor } from "@testing-library/react";
import List from "../components/list";
import api from "../utils/api";
import { mockData } from "../utils/constants";
import Card from "../components/list/card";

// api modülünü mockla
jest.mock("../utils/api");

// card.jsx bileşeni içerisinde provider/router gibi bağımlılıkları kullandığımızda ve bu bağımlılkarın list bileşenin testlerine etki etmesini istemediğimizden card'ı mockla
jest.mock("../components/list/card");

describe("List bileşen testleri", () => {
  // her testin öncesinde mockları temizle
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("api'dan cevabına göre Loader renderlanır", async () => {
    // bu test içeriinde api istğei atılırsa olumlu cevap dönsün
    api.get.mockResolvedValueOnce({ data: [] });

    // bileşeni renderla
    render(<List />);

    // ekranda loader vardır
    screen.getByTestId("list-loader");

    // belirli bir sürenin ardından ekrandan loader gider
    await waitFor(() => {
      expect(screen.queryByTestId("list-loader")).toBeNull();
    });
  });

  it("api'dan error cevabı gelince ekranda Error vardır", async () => {
    // bu test içeriisnde get isteği atıldığında error dönsün
    const errMsg = "Bağlantı zaman aşımına uğradı";
    api.get.mockRejectedValueOnce(new Error(errMsg));

    // list bileşenini renderla
    render(<List />);

    // api'dan cevap gelince ekrana error comp. basılır
    await waitFor(() => screen.getByTestId("error"));
  });

  it("api'dan başarılı cevabı gelince ekrana cardlar vardır", async () => {
    //  card'ların yerine basit bir div basılsın
    Card.mockImplementation(({ item }) => <div>{item.name}</div>);

    // api.get isteği atılınca dondurma verileri dönsün
    api.get.mockResolvedValueOnce({ data: mockData });

    // bileşeni renderla
    render(<List />);

    // veri gelince dizideki her nesne için ekrana kart basılır
    await waitFor(() => {
      mockData.forEach((item) => {
        screen.getByText(item.name);
      });
    });
  });
});
