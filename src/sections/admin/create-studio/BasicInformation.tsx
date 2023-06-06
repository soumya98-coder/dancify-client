import React, { FC } from "react";
import { Button, Stack } from "@mui/material";
import { useFormik } from "formik";

import { getTextFieldProps } from "@/utils";
import SelectDanceStyles from "@/components/SelectDanceStyles";
import { LoadingButton } from "@mui/lab";
import CustomTextField from "@/components/CustomTextField";
import FileUploadButton from "@/components/FileUploadButton";

export interface BasicInformationFormValues {
  name: string;
  details: string;
  featuredImage: string | File;
  danceStyles: string[];
}

interface Props {
  initialValues?: BasicInformationFormValues;
  onSubmit: (data: BasicInformationFormValues) => void;
  isLoading?: boolean;
}

const BasicInformation: FC<Props> = ({
  initialValues,
  onSubmit,
  isLoading,
}) => {
  const formik = useFormik<BasicInformationFormValues>({
    initialValues: initialValues || {
      name: "",
      details: "",
      featuredImage: "",
      danceStyles: [],
    },
    onSubmit: values => onSubmit(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <CustomTextField
          label="Name"
          {...getTextFieldProps<BasicInformationFormValues>(formik, "name")}
        />
        <CustomTextField
          label="Details"
          {...getTextFieldProps<BasicInformationFormValues>(formik, "details")}
        />
        <FileUploadButton
          label="Featured Image"
          onChange={file => {
            formik.setFieldValue("featuredImage", file);
          }}
          value={formik.values.featuredImage}
          accept="image/*"
          error={Boolean(formik.errors.featuredImage)}
          helperText={formik.errors.featuredImage}
        />
        <SelectDanceStyles
          value={formik.values.danceStyles}
          onChange={values => {
            formik.setFieldValue("danceStyles", values);
          }}
          error={Boolean(formik.errors.danceStyles)}
          helperText={formik.errors.danceStyles}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 4 }}
        justifyContent="flex-end">
        <Button onClick={() => formik.resetForm()}>Reset</Button>
        <LoadingButton loading={isLoading} variant="contained" type="submit">
          Save
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default BasicInformation;
