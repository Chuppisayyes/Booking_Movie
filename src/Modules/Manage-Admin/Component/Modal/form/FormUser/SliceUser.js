import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI } from "../../../../../../Apis/userApi";
const user = createAsyncThunk("users/AddUser", async (value) => {
  try {
    const resp = await signupAPI.post();
  } catch (error) {}
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    isLoading: false,
    error: null,
  },
});
