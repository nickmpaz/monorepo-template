import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";

export interface AuthState {
  authenticated: boolean;
  initialized: boolean;
}

const initialState: AuthState = {
  authenticated: false,
  initialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export const { setAuthenticated, setInitialized } = authSlice.actions;

export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectInitialized = (state: RootState) => state.auth.initialized;

export default authSlice.reducer;
