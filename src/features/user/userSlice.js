import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet, apiPost } from "../../lib/apiClient";

/* LIST */
export const fetchUsers = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI) => {
    try {
      return await apiGet("/users");
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

/* CREATE / UPDATE */
export const saveUser = createAsyncThunk(
  "user/save",
  async (payload, thunkAPI) => {
    try {
      return await apiPost("/user/save", payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload?.data || [];
      })
      .addCase(fetchUsers.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      });
  },
});

export default userSlice.reducer;
