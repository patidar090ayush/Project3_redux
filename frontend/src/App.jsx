import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asyncloadproducts } from "./store/actions/productActions";
import {asynccurrentUser} from "./store/actions/userActions"
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(asyncloadproducts());
    dispatch(asynccurrentUser());
  }, [dispatch]);
  return (
    <div className="text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
