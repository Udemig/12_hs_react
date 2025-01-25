import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  // kaçıncı elemandan itibaren kesilecek
  const [start, setStart] = useState(0);

  // sayfa basşına eleman sayısı
  const perPage = 12;

  // kaçıncı elemana kadar kesicez
  const end = start + perPage;

  // slice methodu ile başlagıç ve bitiş arasını kes
  const currFlights = flights.slice(start, end);

  // toplam sayfa sayısı
  const total = Math.ceil(flights.length / perPage);

  // yeni sayfaya yıklanınca
  const handlePage = (event) => {
    setStart(event.selected * 10);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );

  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kod</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currFlights.map((flight) => (
            <tr>
              <td>{c(flight.id)}</td>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          className="pagination"
          pageCount={total}
          pageRangeDisplayed={1}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
