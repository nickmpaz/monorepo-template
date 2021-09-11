import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { Counter } from "../components/Counter";
import {
  selectLocalCount,
  incrementLocalCountAction,
  resetLocalCountAction,
  selectRemoteCountValue,
  incrementRemoteCountAction,
  resetRemoteCountAction,
  getRemoteCountAction,
} from "../store/counterSlice";

export const CounterContainer = () => {
  const dispatch = useAppDispatch();
  const localCount = useAppSelector(selectLocalCount);
  const remoteCount = useAppSelector(selectRemoteCountValue);

  const incrementLocalCount = () => {
    dispatch(incrementLocalCountAction());
  };
  const resetLocalCount = () => {
    dispatch(resetLocalCountAction());
  };
  const incrementRemoteCount = () => {
    dispatch(incrementRemoteCountAction());
  };
  const resetRemoteCount = () => {
    dispatch(resetRemoteCountAction());
  };

  useEffect(() => {
    dispatch(getRemoteCountAction());
  }, [dispatch]);

  return (
    <>
      {remoteCount !== null && (
        <Counter
          localCount={localCount}
          incrementLocalCount={incrementLocalCount}
          resetLocalCount={resetLocalCount}
          remoteCount={remoteCount}
          incrementRemoteCount={incrementRemoteCount}
          resetRemoteCount={resetRemoteCount}
        ></Counter>
      )}
    </>
  );
};
