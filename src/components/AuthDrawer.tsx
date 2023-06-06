import useAuthDrawer from "@/hooks/useAuthDrawer";
import React from "react";
import {
  Container,
  Drawer,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { FiX } from "react-icons/fi";

import LoginForm from "@/sections/auth/LoginForm";
import RegisterForm from "@/sections/auth/RegisterForm";
import ConfirmSignupForm from "@/sections/auth/ConfirmSignupForm";
import ForgotPasswordForm from "@/sections/auth/ForgotPasswordForm";
import ResetPasswordForm from "@/sections/auth/ResetPasswordForm";

const AuthDrawer = () => {
  const { isOpen, onClose, activeAuthState } = useAuthDrawer();

  const getComponent = () => {
    switch (activeAuthState) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      case "forgotPassword":
        return <ForgotPasswordForm />;
      case "resetPassword":
        return <ResetPasswordForm />;
      default:
        return <ConfirmSignupForm />;
    }
  };

  const getTitle = () => {
    switch (activeAuthState) {
      case "login":
        return "Sign In";
      case "register":
        return "Sign Up";
      case "confirmRegistarion":
        return "Verify OTP";
      case "resetPassword":
        return "Reset Password";
      case "forgotPassword":
        return "Forgot Password";
    }
  };

  return (
    <Drawer open={isOpen} onClose={onClose} anchor="bottom">
      <Container maxWidth="sm">
        <Stack gap={4} sx={{ py: 3 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between">
            <Typography variant="h5">{getTitle()}</Typography>
            <IconButton onClick={onClose} color="secondary">
              <FiX />
            </IconButton>
          </Stack>
          {getComponent()}
        </Stack>
      </Container>
    </Drawer>
  );
};

export default AuthDrawer;
