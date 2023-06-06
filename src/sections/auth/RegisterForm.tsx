import React from "react";
import { Auth } from "aws-amplify";
import { Button, Divider, Stack, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import useAuthDrawer from "@/hooks/useAuthDrawer";
import useUserData from "@/hooks/useUserData";
import { CognitoResponse } from "@/types/auth-types";
import { getTextFieldProps } from "@/utils";

const RegisterForm = () => {
  const { isLoading, setLoading, setActiveAuthState, setTempEmail } =
    useAuthDrawer();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async values => {
      setLoading(true);
      try {
        await Auth.signUp({
          username: values.email,
          password: values.password,
        });
        setTempEmail(values.email);
        setActiveAuthState("confirmRegistarion");
        toast.success("Otp Sent Successfully to your Email");
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
          label="Email"
          {...getTextFieldProps(formik, "email")}
        />
        <TextField
          required
          label="Password"
          {...getTextFieldProps(formik, "password")}
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
          Sign Up
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

export default RegisterForm;
