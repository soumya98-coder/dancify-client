import React from "react";
import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { Button, Divider, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import useAuthDrawer from "@/hooks/useAuthDrawer";
import { getTextFieldProps } from "@/utils";

const ResetPasswordForm = () => {
  const { isLoading, setLoading, setActiveAuthState, setTempEmail, tempEmail } =
    useAuthDrawer();
  const formik = useFormik({
    initialValues: {
      email: tempEmail,
      newPassword: "",
      otp: "",
    },
    onSubmit: async values => {
      setLoading(true);
      try {
        await Auth.forgotPasswordSubmit(
          values.email,
          values.otp,
          values.newPassword
        );
        setTempEmail("");
        setActiveAuthState("login");
        toast.success("Password Reset Successfully, Please Login");
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
          disabled
          label="Refgistered Email"
          {...getTextFieldProps(formik, "email")}
        />
        <TextField
          required
          label="New Password"
          {...getTextFieldProps(formik, "newPassword")}
        />
        <TextField required label="OTP" {...getTextFieldProps(formik, "otp")} />
      </Stack>
      <Stack gap={1.5}>
        <LoadingButton
          loading={isLoading}
          sx={{ mt: 4 }}
          variant="contained"
          fullWidth
          type="submit"
          size="large">
          Submit
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

export default ResetPasswordForm;
