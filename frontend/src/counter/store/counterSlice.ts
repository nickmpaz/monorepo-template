import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkStatus } from "../../app/definitions/types";
import { RootState } from "../../app/store/store";
import {
  getRemoteCountRequest,
  incrementRemoteCountRequest,
  resetRemoteCountRequest,
} from "../api/counterApi";

export interface CounterState {
  localCount: number;
  remoteCount: {
    value: number | null;
    status: AsyncThunkStatus;
  };
}

const initialState: CounterState = {
  localCount: 0,
  remoteCount: {
    value: null,
    status: AsyncThunkStatus.Idle,
  },
};

export const getRemoteCountAction = createAsyncThunk(
  "counter/getRemoteCountAction",
  async () => {
    const response = await getRemoteCountRequest();
    return response.data;
  }
);
export const incrementRemoteCountAction = createAsyncThunk(
  "counter/incrementRemoteCountAction",
  async () => {
    const response = await incrementRemoteCountRequest();
    return response.data;
  }
);

export const resetRemoteCountAction = createAsyncThunk(
  "counter/resetRemoteCountAction",
  async () => {
    const response = await resetRemoteCountRequest();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    incrementLocalCountAction: (state) => {
      state.localCount++;
    },
    resetLocalCountAction: (state) => {
      state.localCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRemoteCountAction.pending, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Loading;
      })
      .addCase(getRemoteCountAction.rejected, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Failed;
      })
      .addCase(getRemoteCountAction.fulfilled, (state, action) => {
        state.remoteCount.status = AsyncThunkStatus.Idle;
        state.remoteCount.value = action.payload;
      })
      .addCase(incrementRemoteCountAction.pending, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Loading;
      })
      .addCase(incrementRemoteCountAction.rejected, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Failed;
      })
      .addCase(incrementRemoteCountAction.fulfilled, (state, action) => {
        state.remoteCount.status = AsyncThunkStatus.Idle;
        state.remoteCount.value = action.payload;
      })
      .addCase(resetRemoteCountAction.pending, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Loading;
      })
      .addCase(resetRemoteCountAction.rejected, (state) => {
        state.remoteCount.status = AsyncThunkStatus.Failed;
      })
      .addCase(resetRemoteCountAction.fulfilled, (state, action) => {
        state.remoteCount.status = AsyncThunkStatus.Idle;
        state.remoteCount.value = action.payload;
      });
  },
});

export const { incrementLocalCountAction, resetLocalCountAction } =
  authSlice.actions;

export const selectLocalCount = (state: RootState) => state.counter.localCount;
export const selectRemoteCountValue = (state: RootState) =>
  state.counter.remoteCount.value;
export const selectRemoteCountStatus = (state: RootState) =>
  state.counter.remoteCount.status;

export default authSlice.reducer;
