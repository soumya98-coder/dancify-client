import React from "react";
import { Auth } from "aws-amplify";
import { Button, Divider, Link, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import useAuthDrawer from "@/hooks/useAuthDrawer";
import { getTextFieldProps } from "@/utils";

const ConfirmSignupForm = () => {
  const {
    onClose,
    isLoading,
    setLoading,
    setActiveAuthState,
    tempEmail,
    setTempEmail,
  } = useAuthDrawer();

  const formik = useFormik({
    initialValues: {
      email: tempEmail,
      otp: "",
    },
    onSubmit: async values => {
      setLoading(true);
      try {
        await Auth.confirmSignUp(values.email, values.otp);
        toast.success("Account Verified Successfully, Please Login");
        setTempEmail("");
        setActiveAuthState("login");
        onClose();
      } catch (e: any) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleResendPassword = async () => {
    try {
      await Auth.resendSignUp(formik.values.email);
      toast.success("OTP Sent Successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={3}>
        <TextField
          required
          label="Email"
          disabled
          {...getTextFieldProps(formik, "email")}
        />
        <TextField required label="OTP" {...getTextFieldProps(formik, "otp")} />
        <Link
          variant="body2"
          color="inherit"
          underline="hover"
          sx={{ cursor: "pointer" }}
          onClick={handleResendPassword}>
          Resend Password
        </Link>
      </Stack>
      <Stack gap={1.5}>
        <LoadingButton
          loading={isLoading}
          sx={{ mt: 4 }}
          variant="contained"
          fullWidth
          type="submit"
          size="large">
          Verify
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

export default ConfirmSignupForm;
