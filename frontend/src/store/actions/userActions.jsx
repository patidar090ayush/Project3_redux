import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

export const asynccurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Current logged in user:", user);
    if (user) dispatch(loaduser(user));
    else console.log("No user is currently logged in.");
    // You can dispatch an action to store the current user in Redux here
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const asyncLogoutuser = (user) => async (dispatch, getState) => {
  try {
    console.log("Logout successful:", user);
    localStorage.setItem("loggedInUser", " ");
    // localStorage.removeItem("loggedInUser");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const asyncLoginUser = (user) => async (dispatch) => {
  try {

    // STEP 1: email se user find
    const { data } = await axios.get(`/users?email=${user.email}`);

    // user exist?
    if (data.length === 0) {
      alert("User not found ❌");
      return;
    }

    const foundUser = data[0];

    // STEP 2: password check manually
    if (foundUser.password !== user.password) {
      alert("Wrong password ❌");
      return;
    }

    // STEP 3: success login
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    dispatch(loaduser(foundUser));

    alert("Login Successful ✅");

  } catch (error) {
    console.error("Login error:", error);
  }
};


export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("Server Saved:", res.data);
  } catch (error) {
    console.error("Register error:", error);
  }
};




// import axios from "../../api/axiosconfig";
// import { loaduser } from "../reducers/userSlice";

// /* ================= CURRENT USER (PAGE REFRESH LOGIN) ================= */

// export const asynccurrentUser = () => async (dispatch) => {
//   try {
//     const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (storedUser) {
//       dispatch(loaduser(storedUser));
//       console.log("User restored:", storedUser);
//     }
//   } catch (error) {
//     console.error("Current user error:", error);
//   }
// };

// /* ================= REGISTER ================= */

// export const asyncregisteruser = (user) => async (dispatch) => {
//   try {
//     const res = await axios.post("/users", user);

//     console.log("User Registered:", res.data);

//     // Auto login after register
//     localStorage.setItem("loggedInUser", JSON.stringify(res.data));
//     dispatch(loaduser(res.data));

//   } catch (error) {
//     console.error("Register error:", error);
//   }
// };

// /* ================= LOGIN ================= */

// export const asyncLoginUser = (user) => async (dispatch) => {
//   try {

//     const { data } = await axios.get("/users", {
//       params: {
//         email: user.email,
//         password: user.password
//       }
//     });

//     if (!data || data.length === 0) {
//       alert("Invalid Email or Password ❌");
//       return;
//     }

//     const loggedUser = data[0];

//     localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
//     dispatch(loaduser(loggedUser));

//     console.log("Login successful:", loggedUser);

//   } catch (error) {
//     console.error("Login error:", error);
//   }
// };

// /* ================= LOGOUT ================= */

// export const asyncLogoutuser = () => async (dispatch) => {
//   try {
//     localStorage.removeItem("loggedInUser");
//     dispatch(loaduser(null));
//     console.log("Logout successful");
//   } catch (error) {
//     console.error("Logout error:", error);
//   }
// };