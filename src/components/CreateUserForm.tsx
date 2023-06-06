import React from "react";
import { useFormik } from "formik";
import { Stack, TextField, InputAdornment, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";
import { toast } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "react-query";

import FileUploadButton from "./FileUploadButton";
import SelectDanceStyles from "./SelectDanceStyles";
import { Services } from "@/services";
import { getTextFieldProps, imageSizeTestCallback } from "@/utils";

interface Props {
  userId: string;
  email: string;
  onClose: () => void;
}

interface FormFieldType {
  name: string;
  mobile: string;
  birthDate: string;
  profilePicture: string | File;
  danceStyles: string[];
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobile: yup.string().length(10).required("Mobile is required"),
  birthDate: yup.string().required("Birth Date is required"),
  profilePicture: yup
    .mixed()
    .test("size", "File can't be more than 5MB", v =>
      imageSizeTestCallback(v, 5)
    ),
  danceStyles: yup.array().min(3).required("Dance Styles is required"),
});

const CreateUserForm: React.FC<Props> = ({ email, onClose, userId }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async (values: FormFieldType) => {
      let profilepictureKey = "";
      if (values.profilePicture) {
        try {
          const result = await Storage.put(
            nanoid() + ".jpg",
            values.profilePicture
          );
          profilepictureKey = result.key;
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
      }
      await Services.createUserHandler({
        name: values.name,
        birthDate: dayjs(values.birthDate).format("YYYY-MM-DD"),
        //@ts-ignore
        danceStyles: values.danceStyles,
        email,
        id: userId,
        mobile: "+91" + values.mobile,
        profilePicture: profilepictureKey,
      });
    },
    onSuccess: () => {
      toast.success("User Created Successfully");
      onClose();
    },
  });

  const formik = useFormik<FormFieldType>({
    initialValues: {
      name: "",
      mobile: "",
      birthDate: dayjs().format("YYYY-MM-DD"),
      profilePicture: "",
      danceStyles: [],
    },
    validationSchema,
    onSubmit: async values => {
      mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <TextField
          required
          label="Name"
          {...getTextFieldProps(formik, "name")}
        />
        <TextField
          required
          label="Mobile"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          {...getTextFieldProps(formik, "mobile")}
        />

        <DatePicker
          label="Birth Date"
          value={dayjs(formik.values.birthDate)}
          onChange={value =>
            formik.setFieldValue("birthDate", value!.format("YYYY-MM-DD"))
          }
          format="DD-MM-YYYY"
          openTo="year"
          slotProps={{
            textField: {
              error:
                formik.touched.birthDate && Boolean(formik.errors.birthDate),
              helperText:
                formik.touched.birthDate && (formik.errors.birthDate as string),
            },
          }}
        />
        <FileUploadButton
          label="Profile Picture"
          accept="image/*"
          value={formik.values.profilePicture}
          onChange={value => {
            formik.setFieldValue("profilePicture", value);
          }}
          error={
            formik.touched.profilePicture &&
            Boolean(formik.errors.profilePicture)
          }
          helperText={
            formik.touched.profilePicture
              ? (formik.errors.profilePicture as string)
              : ""
          }
        />
        <SelectDanceStyles
          value={formik.values.danceStyles}
          onChange={value => {
            formik.setFieldValue("danceStyles", value);
          }}
          error={
            formik.touched.danceStyles && Boolean(formik.errors.danceStyles)
          }
          helperText={
            formik.touched.danceStyles
              ? (formik.errors.danceStyles as string)
              : ""
          }
        />
      </Stack>
      <Stack direction="row" gap={2} mt={4}>
        <Button onClick={e => formik.handleReset(e)} variant="outlined">
          Reset
        </Button>
        <LoadingButton loading={isLoading} variant="contained" type="submit">
          Submit
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default CreateUserForm;
