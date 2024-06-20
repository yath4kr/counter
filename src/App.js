import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/slices/counter";
import Footer from "./Compononets/Footer";

function App() {
  const count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <div className="text">
          <h1>Currently, the count is - {count}</h1>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
