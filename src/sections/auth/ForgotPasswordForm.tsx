import React from "react";
import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { Button, Divider, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import useAuthDrawer from "@/hooks/useAuthDrawer";
import { getTextFieldProps } from "@/utils";

const ForgotPasswordForm = () => {
  const { isLoading, setLoading, setActiveAuthState, setTempEmail } =
    useAuthDrawer();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async values => {
      setLoading(true);
      try {
        await Auth.forgotPassword(values.email);
        setTempEmail(values.email);
        setActiveAuthState("resetPassword");
        toast.success("OTP Sent Successfully");
      } catch (e: any) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <TextField
          required
          label="Enter Your Refgistered Email"
          {...getTextFieldProps(formik, "email")}
        />
      </Stack>
      <Stack gap={1.5}>
        <LoadingButton
          loading={isLoading}
          sx={{ mt: 4 }}
          variant="contained"
          fullWidth
          type="submit"
          size="large">
          Send OTP
        </LoadingButton>
        <Divider>or</Divider>
        <Stack direction="row" gap={1.5}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={() => setActiveAuthState("login")}>
            Sign In
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default ForgotPasswordForm;
