import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyLoginCredential } from "./authService";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      return await verifyLoginCredential(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.errorMessage || "Login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
  },
  
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        const userData = action.payload.responseData.data;

        state.user = userData;
        state.token = userData.token;
        state.isAuthenticated = true;

        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
