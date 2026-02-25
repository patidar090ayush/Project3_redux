import { use, useEffect } from "react";
import axios from "./api/axiosconfig";
import { asyncgetusers } from "./store/userActions";

const App = () => {
  useEffect(() => {
    asyncgetusers();
  }, []);

  return <div>App</div>;
};

export default App;
