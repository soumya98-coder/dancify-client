import { Box, CircularProgress, Stack } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

interface Props {
  file: File;
}

const FileImg: FC<Props> = ({ file }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  }, [file]);

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      justifyContent="center"
      alignItems="center">
      {image ? (
        <Box
          component="img"
          src={image}
          alt={file.name}
          sx={{ width: "100%" }}
        />
      ) : (
        <CircularProgress size={16} />
      )}
    </Box>
  );
};

export default FileImg;
