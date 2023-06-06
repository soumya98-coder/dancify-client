import CustomTextField from "@/components/CustomTextField";
import FileUploadButton from "@/components/FileUploadButton";
import {
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import React, { FC } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import * as yup from "yup";

export interface CreativesFormValues {
  type: "image" | "video";
  description: string;
  link: string | File;
}

interface Props {
  initialValues?: CreativesFormValues[];
  onSubmit: (data: CreativesFormValues[]) => void;
  isLoading?: boolean;
}

const testCallback = (value: any | undefined, size: number) => {
  if (!value) return true;
  return value.size <= size * 1024 * 1024;
};

const validationSchema = yup.array().of(
  yup.object().shape({
    type: yup.string().required("Type is required"),
    description: yup.string().required("Description is required"),
    link: yup
      .mixed()
      .test("size", "File can't be more than 5MB", v => testCallback(v, 5))
      .required("File is required"),
  })
);

const AddCreatives: FC<Props> = ({ initialValues, onSubmit, isLoading }) => {
  const getNewItem = (type: "image" | "video") => {
    return {
      type,
      description: "",
      link: "",
    };
  };

  const formik = useFormik<CreativesFormValues[]>({
    initialValues: initialValues || [getNewItem("image")],
    validationSchema,
    onSubmit: values => {
      onSubmit(values);
    },
  });

  const addNewItem = () => {
    const values = formik.values;
    const newItem = getNewItem("image");
    formik.setFieldValue(`${values.length}`, newItem);
  };

  const removeItem = (index: number) => {
    const values = formik.values;
    if (values.length === 1) return formik.setValues([getNewItem("image")]);
    const newValues = values.filter((_: any, i: number) => i !== index);
    formik.setValues(newValues);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        {formik.values.map((value, index) => {
          const touched = formik.touched[`${index}`];
          const errors = formik.errors[`${index}`];
          return (
            <Card key={index}>
              <CardContent component={Stack} gap={2}>
                <IconButton
                  sx={{ alignSelf: "flex-end" }}
                  size="small"
                  color="error"
                  onClick={() => removeItem(index)}>
                  <FiTrash2 />
                </IconButton>
                <FileUploadButton
                  label="Image"
                  accept={value.type === "image" ? "image/*" : "video/*"}
                  value={formik.values[index].link}
                  onChange={value => {
                    formik.setFieldValue(`${index}.link`, value);
                  }}
                  error={touched?.link ? Boolean(errors?.link) : false}
                  helperText={touched?.link ? errors?.link : ""}
                />
                <CustomTextField
                  label="Image Caption"
                  size="small"
                  name={`${index}.description`}
                  value={formik.values[index].description}
                  onChange={formik.handleChange}
                  error={
                    touched?.description ? Boolean(errors?.description) : false
                  }
                  helperText={touched?.description && errors?.description}
                />
              </CardContent>
            </Card>
          );
        })}
        <Divider>
          <Button startIcon={<FiPlus />} onClick={addNewItem}>
            Add Image
          </Button>
        </Divider>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 4 }}
        justifyContent="flex-end">
        <Button onClick={() => formik.resetForm()}>Reset</Button>
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Stack>
    </form>
  );
};

export default AddCreatives;
