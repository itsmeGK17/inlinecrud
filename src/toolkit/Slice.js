import { createSlice } from "@reduxjs/toolkit";

import { Userdata } from "../component/Userdata";

const initialState = {
  users: Userdata,
  editUserId: null,
}

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {

    editUser: (state, action) => {
      state.editUserId = action.payload;

    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },

    saveUser(state, action) {
      const { id, updatedUser } = action.payload;
      state.users = state.users.map(user =>
        user.id === id ? {...updatedUser } : user
      );
      state.editUserId = null;
    },

    cancelUser: (state) => {
      state.editUserId = null;
    },
  },
});

export { userSlice };
export const { editUser, deleteUser, saveUser, cancelUser } = userSlice.actions;
