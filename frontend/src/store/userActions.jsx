import { get } from "react-hook-form";
import axios from "../api/axiosconfig";
import { loadusers } from "./userSlice";

const asyncgetusers = () =>  async (dispatch , getState) => {
  try {

    console.log(getState());
    const res = await axios.get("/users");
    dispatch(loadusers(res.data));
    } catch (error) {
    console.error("Error fetching users:", error);
  } 
};

export { asyncgetusers };