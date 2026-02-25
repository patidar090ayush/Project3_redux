import axios from "../api/axiosconfig";
import { loadusers } from "./userSlice";

const asyncgetusers = async () => {
  try {
    const res = await axios.get("/users");
    loadusers(res.data);
    } catch (error) {
    console.error("Error fetching users:", error);
  } 
};

export { asyncgetusers };