import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { FC } from "react";
import { LogoutButton } from "../../auth/components/LogoutButton";

interface CounterProps {
  localCount: number;
  incrementLocalCount: () => void;
  resetLocalCount: () => void;
  remoteCount: number;
  incrementRemoteCount: () => void;
  resetRemoteCount: () => void;
}

export const Counter: FC<CounterProps> = ({
  localCount,
  incrementLocalCount,
  resetLocalCount,
  remoteCount,
  incrementRemoteCount,
  resetRemoteCount,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LogoutButton></LogoutButton>
      <Typography variant="h3">Local Counter: {localCount}</Typography>
      <Box display="flex">
        <Button variant="contained" onClick={() => incrementLocalCount()}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => resetLocalCount()}>
          Reset
        </Button>
      </Box>
      <Typography variant="h3">Remote Counter: {remoteCount}</Typography>
      <Box display="flex">
        <Button variant="contained" onClick={() => incrementRemoteCount()}>
          Increment
        </Button>
        <Button variant="contained" onClick={() => resetRemoteCount()}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
