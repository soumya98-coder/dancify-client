import React from "react";
import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import AddLocationForm, {
  LocationFormValues,
} from "@/sections/shared/AddLocationForm";
import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import BasicInformation, {
  BasicInformationFormValues,
} from "@/sections/admin/create-studio/BasicInformation";

import Overview from "@/sections/admin/create-studio/Overview";

enum Steps {
  BasicInformation = 0,
  AddLocation = 1,
  Overview = 2,
}

export interface StepsDataType {
  [Steps.BasicInformation]: BasicInformationFormValues;
  [Steps.AddLocation]: LocationFormValues;
}

const CreateStudio = () => {
  const [stepsData, setStepsData] = React.useState<StepsDataType>(
    {} as StepsDataType
  );
  const [activeStep, setActiveStep] = React.useState(Steps.BasicInformation);
  const maxSteps = Object.keys(Steps).length / 2;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const isNextDisabled = !(
    (activeStep === Steps.BasicInformation &&
      stepsData[Steps.BasicInformation]) ||
    (activeStep === Steps.AddLocation && stepsData[Steps.AddLocation])
  );

  const handleSubmit = (step: Steps, value: any) => {
    setStepsData({
      ...stepsData,
      [step]: value,
    });
    handleNext();
  };

  return (
    <AdminGlobalLayout title="Create Studio">
      <Paper>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              endIcon={<FiChevronRight />}
              disabled={isNextDisabled || activeStep === maxSteps - 1}>
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              startIcon={<FiChevronLeft />}
              onClick={handleBack}
              disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      </Paper>
      <Box sx={{ mt: 4 }}>
        {activeStep === Steps.BasicInformation && (
          <Stack gap={3}>
            <Typography variant="subtitle1" textTransform="uppercase">
              Basic Information
            </Typography>
            <BasicInformation
              initialValues={stepsData[Steps.BasicInformation]}
              onSubmit={v => handleSubmit(Steps.BasicInformation, v)}
            />
          </Stack>
        )}
        {activeStep === Steps.AddLocation && (
          <Stack gap={3}>
            <Typography variant="subtitle1" textTransform="uppercase">
              Add Location
            </Typography>
            <AddLocationForm
              initialValues={stepsData[Steps.AddLocation]}
              onSubmit={v => handleSubmit(Steps.AddLocation, v)}
            />
          </Stack>
        )}
        {activeStep === Steps.Overview && (
          <Stack gap={3}>
            <Typography variant="subtitle1" textTransform="uppercase">
              Overview
            </Typography>
            <Overview data={stepsData} />
          </Stack>
        )}
      </Box>
    </AdminGlobalLayout>
  );
};

export default CreateStudio;
