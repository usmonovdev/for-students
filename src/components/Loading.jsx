import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="progressBox">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Loading;
