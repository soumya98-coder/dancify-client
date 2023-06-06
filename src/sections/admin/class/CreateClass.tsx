import React, { FC } from "react";
import { LoadingButton } from "@mui/lab";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { FiX } from "react-icons/fi";
import { useMutation } from "react-query";
import * as yup from "yup";
import { toast } from "react-hot-toast";

import RichTextEditor from "@/components/RichTextEditor";
import SelectDanceStyles from "@/components/SelectDanceStyles";
import CustomTextField from "@/components/CustomTextField";

import { ClassType, DanceStyle } from "@/API";
import useActiveStudio from "@/hooks/useActiveStudio";
import { classType } from "@/data/classType";
import { Services } from "@/services";
import { getTextFieldProps } from "@/utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormFieldType {
  name: string;
  danceStyles: DanceStyle[];
  classType: ClassType;
  price: number;
  startDateTime: string;
  classDuration: number;
  endDateTime: string;
  classCapacity: number;
  description: string;
}

const sampleBody: FormFieldType = {
  name: "",
  danceStyles: [],
  classType: ClassType.OFFLINE,
  price: 300,
  startDateTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  classDuration: 1,
  endDateTime: dayjs().add(1, "hour").format("YYYY-MM-DD HH:mm:ss"),
  classCapacity: 10,
  description: "",
};

const validationSchema = yup.object().shape({
  classCapacity: yup.number().required("Capacity is required"),
  classType: yup.string().required("Class type is required"),
  danceStyles: yup.array().required("Dance styles is required"),
  description: yup.string().required("Description is required"),
  name: yup.string().required("Name is required"),
  price: yup.number().required("Price is required"),
  startDateTime: yup.string().required("Start date time is required"),
  classDuration: yup.number().required("Class duration is required"),
  endDateTime: yup.string().required("End date time is required"),
});

const CreateClass: FC<Props> = ({ onClose, open }) => {
  const { activeStudio } = useActiveStudio();
  const { isLoading, mutate } = useMutation({
    mutationFn: async (value: FormFieldType) => {
      const data = await Services.createClassHandler({
        classCapacity: value.classCapacity,
        classType: value.classType,
        danceStyles: value.danceStyles,
        description: value.description,
        startDateTime: dayjs(value.startDateTime).toISOString(),
        endDateTime: dayjs(value.endDateTime).toISOString(),
        name: value.name,
        price: value.price,
        studioID: activeStudio!.id,
      });
      return data.createClass;
    },

    onSuccess: classData => {
      toast.success("Class created successfully");
      // Router.push(`/admin/classes/${classData.id}`)
      onClose();
    },
  });

  const formik = useFormik<FormFieldType>({
    initialValues: sampleBody,
    validationSchema,
    onSubmit: async values => {
      if (activeStudio) {
        mutate(values);
      }
    },
  });

  return (
    <Drawer open={open} onClose={onClose} anchor="bottom">
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Typography variant="subtitle1" textTransform="uppercase">
            Create Class
          </Typography>
          <IconButton onClick={onClose}>
            <FiX />
          </IconButton>
        </Stack>
        <Box component="form" mt={2} onSubmit={formik.handleSubmit}>
          <Stack gap={3}>
            <CustomTextField
              label="Name"
              {...getTextFieldProps<FormFieldType>(formik, "name")}
            />
            <SelectDanceStyles
              value={formik.values.danceStyles as any}
              onChange={values => {
                formik.setFieldValue("danceStyles", values);
              }}
              error={Boolean(formik.errors.danceStyles)}
              helperText={formik.errors.danceStyles}
            />
            <CustomTextField
              select
              label="Class Type"
              {...getTextFieldProps<FormFieldType>(formik, "classType")}>
              {classType.map(item => {
                return (
                  <MenuItem key={item.id} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </CustomTextField>
            <CustomTextField
              label="Price"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "price")}
            />
            <DateTimeField
              label="Start Date Time"
              value={dayjs(formik.values.startDateTime)}
              onChange={(value: any) => {
                formik.setFieldValue("startDateTime", value);
                formik.setFieldValue(
                  "endDateTime",
                  value
                    .add(Number(formik.values.classDuration), "hour")
                    .format("YYYY-MM-DD HH:mm:ss")
                );
              }}
              format="DD-MM-YYYY HH:mm:ss"
              slotProps={{
                textField: {
                  error:
                    formik.touched.startDateTime &&
                    Boolean(formik.errors.startDateTime),
                  helperText:
                    formik.touched.startDateTime &&
                    (formik.errors.startDateTime as string),
                },
              }}
            />
            <CustomTextField
              label="Class Duration"
              type="number"
              name="classDuration"
              value={formik.values.classDuration}
              onChange={e => {
                formik.setFieldValue("classDuration", Number(e.target.value));
                formik.setFieldValue(
                  "endDateTime",
                  dayjs(formik.values.startDateTime)
                    .add(Number(e.target.value), "hour")
                    .format("YYYY-MM-DD HH:mm:ss")
                );
              }}
              error={
                formik.touched.classDuration && !!formik.errors.classDuration
              }
              helperText={
                !!formik.touched.classDuration && formik.errors.classDuration
              }
            />
            <DateTimeField
              disabled
              label="End Date Time"
              value={dayjs(formik.values.endDateTime)}
              format="DD-MM-YYYY HH:mm:ss"
            />

            <CustomTextField
              label="Class Capacity"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "classCapacity")}
            />
            <RichTextEditor
              label="Description"
              value={formik.values.description}
              onChange={values => {
                formik.setFieldValue("description", values);
              }}
              error={Boolean(formik.errors.description)}
              helperText={formik.errors.description}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button onClick={() => formik.resetForm()} size="large">
              Reset
            </Button>
            <LoadingButton
              loading={isLoading}
              variant="contained"
              size="large"
              type="submit">
              Submit
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Drawer>
  );
};

export default CreateClass;
