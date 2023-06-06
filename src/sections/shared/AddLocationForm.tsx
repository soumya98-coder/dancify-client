import { FC } from "react";
import { Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";

import { getTextFieldProps } from "@/utils";
import CustomTextField from "@/components/CustomTextField";

export interface LocationFormValues {
  lineone: string;
  linetwo: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
}

interface Props {
  initialValues?: LocationFormValues;
  onSubmit: (data: LocationFormValues) => void;
  isLoading?: boolean;
}

const AddLocationForm: FC<Props> = ({ initialValues, onSubmit, isLoading }) => {
  const formik = useFormik<LocationFormValues>({
    initialValues: initialValues || {
      lineone: "",
      linetwo: "",
      landmark: "",
      city: "",
      district: "",
      state: "",
      country: "",
      pincode: "",
    },
    onSubmit: values => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <CustomTextField
          label="Line One"
          {...getTextFieldProps<LocationFormValues>(formik, "lineone")}
        />
        <CustomTextField
          label="Line Two"
          {...getTextFieldProps<LocationFormValues>(formik, "linetwo")}
          multiline
          rows={5}
        />
        <CustomTextField
          label="Landmark"
          {...getTextFieldProps<LocationFormValues>(formik, "landmark")}
        />
        <CustomTextField
          label="City"
          {...getTextFieldProps<LocationFormValues>(formik, "city")}
        />
        <CustomTextField
          label="District"
          {...getTextFieldProps<LocationFormValues>(formik, "district")}
        />
        <CustomTextField
          label="State"
          {...getTextFieldProps<LocationFormValues>(formik, "state")}
        />
        <CustomTextField
          label="Country"
          {...getTextFieldProps<LocationFormValues>(formik, "country")}
        />
        <CustomTextField
          label="Pincode"
          {...getTextFieldProps<LocationFormValues>(formik, "pincode")}
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

export default AddLocationForm;
