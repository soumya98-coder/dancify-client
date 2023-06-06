import { FC, useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  FormHelperText,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { FiDelete, FiImage, FiVideo } from "react-icons/fi";
import { titleCaseToCamelCase } from "@/utils";

interface Props {
  value: string | File;
  error?: boolean;
  helperText?: string;
  onChange: (value: File | string) => void;
  label: string;
  accept: "image/*" | "video/*";
  disabled?: boolean;
}

export const FileUploadButton: FC<Props> = ({
  value,
  onChange,
  label,
  accept,
  disabled = false,
  error,
  helperText,
}) => {
  const [fileInputValue, setFileInputValue] = useState("");

  useEffect(() => {
    if (typeof value === "string") {
      setFileInputValue(value);
    } else if (value instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(value);
      reader.onloadend = () => {
        setFileInputValue(reader.result as string);
      };
    }
  }, [value]);

  return (
    <Stack gap={1} alignItems="flex-start">
      <Button
        startIcon={accept === "image/*" ? <FiImage /> : <FiVideo />}
        component="label">
        {label}
        <input
          hidden
          type="file"
          disabled={disabled}
          onChange={(e: any) => {
            const newFile = new File(
              [e.target.files[0]],
              titleCaseToCamelCase(e.target.files[0].name),
              { type: e.target.files[0].type }
            );
            onChange(newFile);
          }}
          accept={accept}
        />
      </Button>
      {fileInputValue ? (
        <Box sx={{ position: "relative" }}>
          {accept === "image/*" ? (
            <CardMedia
              component="img"
              sx={{ width: "300px" }}
              alt="img"
              src={fileInputValue}
            />
          ) : accept === "video/*" ? (
            <video width={"200px"} controls={true}>
              <source src={fileInputValue} type="video/mp4"></source>
            </video>
          ) : null}
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <IconButton color="error" onClick={() => onChange("")}>
              <FiDelete />
            </IconButton>
          </Stack>
        </Box>
      ) : null}
      <FormHelperText error={error}>{error && helperText}</FormHelperText>
    </Stack>
  );
};

export default FileUploadButton;
