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

import { ClassType, DanceStyle, SubscriptionPlan } from "@/API";
import useActiveStudio from "@/hooks/useActiveStudio";
import { classType } from "@/data/classType";
import { Services } from "@/services";
import { getTextFieldProps } from "@/utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

// input CreateSubscriptionPlanInput {
//   id: ID
//   name: String!
//   description: String!
//   price: Float!
//   discountedPrice: Float!
//   maxAllowedClasses: Int!
//   danceStyles: [DanceStyle!]
//   durationInDays: Int!
//   studioID: ID!
//   _version: Int
// }

interface FormFieldType {
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  maxAllowedClasses: number;
  danceStyles: DanceStyle[];
  durationInDays: number;
}

const sampleBody: FormFieldType = {
  name: "",
  description: "",
  price: 2700,
  discountedPrice: 2500,
  maxAllowedClasses: 8,
  danceStyles: [],
  durationInDays: 30,
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  discountedPrice: yup.number().required("Discounted Price is Required"),
  maxAllowedClasses: yup.number().required("Max Allowed Classes is Required"),
  danceStyles: yup.array().required("Dance Styles is Required"),
  durationInDays: yup.number().required("Duration in Days is Required"),
});

const CreateSubscription: FC<Props> = ({ onClose, open }) => {
  const { activeStudio } = useActiveStudio();
  const { isLoading, mutate } = useMutation({
    mutationFn: async (value: FormFieldType) => {
      const data = await Services.createSubscriptionPlanHandler({
        ...value,
        studioID: activeStudio?.id as string,
      });
      return data.createSubscriptionPlan as SubscriptionPlan;
    },
    onSuccess: classData => {
      toast.success("Subscription plan created successfully");
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
            Create Subscription Plan
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
            <RichTextEditor
              label="Description"
              value={formik.values.description}
              onChange={values => {
                formik.setFieldValue("description", values);
              }}
              error={Boolean(formik.errors.description)}
              helperText={formik.errors.description}
            />
            <CustomTextField
              label="Price"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "price")}
            />
            <CustomTextField
              label="Discounted Price"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "discountedPrice")}
            />
            <CustomTextField
              label="Max Allowed Classes"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "maxAllowedClasses")}
            />
            <CustomTextField
              label="Duration in Days"
              type="number"
              {...getTextFieldProps<FormFieldType>(formik, "durationInDays")}
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

export default CreateSubscription;
