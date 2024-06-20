import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/slices/counter";
const Footer = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <h1>{count}</h1>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Footer;
