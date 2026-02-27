// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   users: [],
// //   totalAmount: 0,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loaduser: (state, action) => {
//         // here we can not call api to fetch the data because we are in reducer and reducers are pure functions and they should not have any side effects but we can call an api in action creator and then dispatch the action to the reducer to update the state
//       state.users = action.payload;
//     },
//   },
// });

// export default userSlice.reducer;
// export const { loaduser } = userSlice.actions;








import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loaduser } = userSlice.actions;
export default userSlice.reducer;