import { Paper } from "@mui/material";
import dynamic from "next/dynamic";
import React, { FC } from "react";

import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  value: string;
}

const RichTextViewer: FC<Props> = ({ value }) => {
  return (
    <Paper variant="outlined">
      <ReactQuill value={value} theme="bubble" readOnly />
    </Paper>
  );
};

export default RichTextViewer;
