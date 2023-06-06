import { Class } from "@/API";
import { Stack } from "@mui/material";
import React, { FC } from "react";

interface Props {
  classData: Class;
}

const ClassDetails: FC<Props> = ({ classData }) => {
  return <Stack py={2}>ClassDetails</Stack>;
};

export default ClassDetails;
