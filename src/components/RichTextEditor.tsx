import { FormHelperText, InputLabel, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React, { FC } from "react";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const RichTextEditor: FC<Props> = ({
  label,
  onChange,
  value,
  error,
  helperText,
}) => {
  return (
    <Stack gap={1}>
      <InputLabel htmlFor="richTextEditor">{label}</InputLabel>
      <div>
        <ReactQuill
          id="richTextEditor"
          theme="snow"
          value={value}
          onChange={onChange}
        />
        <FormHelperText error={error} sx={{ mt: 0.5, ml: 2 }}>
          {helperText}
        </FormHelperText>
      </div>
    </Stack>
  );
};

export default RichTextEditor;
