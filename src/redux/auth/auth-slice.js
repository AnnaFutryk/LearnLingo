import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, logOut } from "./auth-operations";

const initialState = {
  userId: "",
  name: "",
  email: "",
  isAuth: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(signUp.fulfilled, (store, { payload }) => {
        console.log("Signup fulfilled", payload);
        const { uid, email, name } = payload;
        store.userId = uid;
        store.name = name || "";
        store.email = email;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
      })
      .addCase(signUp.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
      })
      .addCase(signIn.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(signIn.fulfilled, (store, { payload }) => {
        const { email, name, localId } = payload;
        store.userId = localId;
        store.name = name;
        store.email = email;
        store.error = null;
        store.loading = false;
        store.isAuth = true;
      })
      .addCase(signIn.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
      })
      .addCase(logOut.pending, (store) => {
        store.error = null;
        store.loading = true;
      })
      .addCase(logOut.fulfilled, (store) => {
        store.userId = "";
        store.name = "";
        store.email = "";
        store.error = null;
        store.loading = false;
        store.isAuth = false;
      })
      .addCase(logOut.rejected, (store, { payload }) => {
        store.error = payload;
        store.loading = false;
        store.isAuth = false;
        store.userId = "";
        store.name = "";
        store.email = "";
      });
  },
});

export default authSlice.reducer;
