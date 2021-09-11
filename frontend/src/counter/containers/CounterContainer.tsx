import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { Counter } from "../components/Counter";
import {
  selectLocalCount,
  incrementLocalCountAction,
  resetLocalCountAction,
} from "../store/counterSlice";

export const CounterContainer = () => {
  const dispatch = useAppDispatch();
  const localCount = useAppSelector(selectLocalCount);

  const incrementLocalCount = () => {
    dispatch(incrementLocalCountAction());
  };
  const resetLocalCount = () => {
    dispatch(resetLocalCountAction());
  };

  return (
    <Counter
      localCount={localCount}
      incrementLocalCount={incrementLocalCount}
      resetLocalCount={resetLocalCount}
    ></Counter>
  );
};
