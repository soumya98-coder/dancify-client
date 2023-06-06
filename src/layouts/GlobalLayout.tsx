import CreateUserForm from "@/components/CreateUserForm";
import useUserData from "@/hooks/useUserData";
import { Services } from "@/services";
import { Drawer, Typography, Container, Box, Button } from "@mui/material";
import { Auth, Hub } from "aws-amplify";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GlobalLayout: React.FC<Props> = ({ children }) => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const { setUserData, userData } = useUserData();

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        const user = currentUser.attributes;
        setUserData({
          userID: user.sub,
          email: user.email,
          email_verified: user.email_verified,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    const listener = async (d: any) => {
      if (d.payload.event === "signIn") {
        const userData = d.payload.data;
        const user = userData.attributes;
        setUserData({
          userID: user.sub,
          email: user.email,
          email_verified: user.email_verified,
        });
        try {
          const userExist = await Services.getUserHandler(user.sub);
          if (!userExist.getUser) {
            setShowCreateUserModal(true);
          }
        } catch (err) {
          console.log(err);
        }
      } else if (d.payload.event === "signOut") {
        setUserData({
          userID: "",
          email: "",
          email_verified: false,
        });
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  return (
    <>
      {children}
      <Drawer
        anchor="bottom"
        open={showCreateUserModal}
        onClose={() => setShowCreateUserModal(p => !p)}>
        <Container maxWidth="sm" sx={{ py: 2 }}>
          <div>
            <Typography
              variant="subtitle1"
              textTransform="uppercase"
              fontWeight={700}>
              Complete Your Profile
            </Typography>
            <Typography>
              Please complete your profile to continue using the app and get a
              free class in any studio.
            </Typography>
          </div>
          <Box sx={{ mt: 3 }}>
            <CreateUserForm
              email={userData.email}
              userId={userData.userID}
              onClose={() => setShowCreateUserModal(false)}
            />
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default GlobalLayout;
