import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

// birden fazla verinin state'ini tutuğumuzdan dolayı ilk değerimiz bir nesne
const initialState = {
  todos: [],
  isDarkTheme: true,
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // input içeriğine eriş
    const text = e.target[0].value;

    // reducer'a todo oluşturma aksiyonu gönder
    dispatch({ type: "CREATE", payload: text });
  };

  return (
    <div
      className={`vh-100 container p-4 ${
        !state.isDarkTheme && "bg-white text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center gap-5">
        <h1>Todo List</h1>

        <button onClick={() => dispatch({ type: "TOGGLE" })}>Tema Değiş</button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center my-5"
      >
        <input
          type="text"
          className="form-control"
          placeholder="todo giriniz..."
        />
        <button className="bg-success">Gönder</button>
      </form>

      <ul className="list-group">
        {state.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">{todo.text}</span>
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
