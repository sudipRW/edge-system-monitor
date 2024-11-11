import React from "react";
import { Card,Alert } from "@mui/material";

const AlertBox = ({ alertData }) => {
  return (
    <div className="w-[40%] absolute right-8">
      <Card elevation={1} className="p-2">
        {(alertData?.status === 200 || alertData?.status === 201) && !alertData?.data?.message ? (
          <Alert severity="success">{alertData?.message}</Alert>
        ) : (
          <Alert severity="error">{alertData?.data?.message}</Alert>
        )}
      </Card>
    </div>
  );
};

export default AlertBox;
