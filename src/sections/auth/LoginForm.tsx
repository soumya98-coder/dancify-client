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

const LoginForm = () => {
  const { onClose, isLoading, setLoading, setActiveAuthState } =
    useAuthDrawer();
  const { setUserData } = useUserData();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async values => {
      setLoading(true);
      try {
        const data: CognitoResponse = await Auth.signIn({
          username: values.email,
          password: values.password,
        });
        setUserData({
          userId: data.attributes.sub,
          email: data.attributes.email,
          email_verified: data.attributes.email_verified,
        });
        toast.success("Signed In Successfully");
        onClose();
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
        <Link
          variant="body2"
          color="inherit"
          underline="none"
          sx={{ cursor: "pointer" }}
          onClick={() => setActiveAuthState("forgotPassword")}>
          Forget Password?
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
          Sign In
        </LoadingButton>
        <Divider>or</Divider>
        <Stack direction="row" gap={1.5}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={() => setActiveAuthState("register")}>
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
