import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { FC } from "react";

interface CounterProps {
  localCount: number;
  incrementLocalCount: () => void;
  resetLocalCount: () => void;
}

export const Counter: FC<CounterProps> = ({
  localCount,
  incrementLocalCount,
  resetLocalCount,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3">Local Counter: {localCount}</Typography>
      <Box display="flex">
        <Button variant="contained" onClick={() => incrementLocalCount()}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => resetLocalCount()}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
