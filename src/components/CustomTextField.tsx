import { InputLabel, Stack, TextField, TextFieldProps } from "@mui/material";
import React, { FC } from "react";

const CustomTextField: FC<TextFieldProps> = props => {
  return (
    <Stack gap={1}>
      <InputLabel id={props.name} required={props.required}>
        {props.label}
      </InputLabel>
      <TextField {...props} label="" />
    </Stack>
  );
};

export default CustomTextField;
