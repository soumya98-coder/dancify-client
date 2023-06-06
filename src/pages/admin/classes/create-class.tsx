import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import { Typography } from "@mui/material";
import React from "react";

const CreateClasses = () => {
  return (
    <AdminGlobalLayout title="Classes">
      <Typography variant="subtitle1" textTransform="uppercase">
        Basic Information
      </Typography>
    </AdminGlobalLayout>
  );
};

export default CreateClasses;
