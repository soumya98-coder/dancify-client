import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React, { Fragment } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { Services } from "@/services";
import useUserData from "@/hooks/useUserData";
import { Studio } from "@/API";
import useActiveStudio from "@/hooks/useActiveStudio";

const menus = [
  {
    id: "1",
    title: "General",
    items: [
      { id: "11", title: "Studio Details", link: "/admin/studio-details" },
      { id: "12", title: "Medias", link: "/admin/medias" },
      { id: "13", title: "Create Studio", link: "/admin/create-studio" },
    ],
  },
  {
    id: "2",
    title: "Classes",
    items: [
      { id: "21", title: "Upcoming Classes", link: "/admin/upcoming-classes" },
      { id: "22", title: "Class History", link: "/admin/class-history" },
      {
        id: "23",
        title: "Create Classes",
        link: "/admin/classes/create-class",
      },
    ],
  },
  {
    id: "3",
    title: "Subscriptions",
    items: [
      { id: "31", title: "Subscriptions", link: "/admin/subscriptions" },
      {
        id: "32",
        title: "Create Subscription",
        link: "/admin/create-subscription",
      },
    ],
  },
];

interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

const AdminGlobalLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  action,
}) => {
  const {
    userData: { userID },
  } = useUserData();
  const [open, setOpen] = React.useState(false);
  const { activeStudio, setActiveStudio } = useActiveStudio();

  const { data: studioData } = useQuery({
    queryFn: async () => {
      const data = await Services.listStudiosHandler(userID);
      return data.listStudios.items as Studio[];
    },
    enabled: !!userID,
    onSuccess: studioData => {
      if (studioData.length) setActiveStudio(studioData[0]);
    },
  });

  console.log(studioData, "activ");

  return (
    <>
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton color="secondary" onClick={() => setOpen(true)}>
              <FiMenu />
            </IconButton>
            <div>
              <Typography variant="h5">{title}</Typography>
              {subtitle && (
                <Typography color="text.secondary">{subtitle}</Typography>
              )}
            </div>
          </Stack>
          {action && <div>{action}</div>}
        </Stack>
        <Box sx={{ mt: 3 }}>{children}</Box>
      </Container>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            position: "sticky",
            minWidth: 240,
            top: 0,
            px: 2,
            py: 1,
            gap: 2,
          }}>
          <Select
            fullWidth
            size="small"
            value={activeStudio?.id ? activeStudio.id : ""}
            onChange={e =>
              setActiveStudio(studioData?.find(s => s.id === e.target.value)!)
            }>
            {studioData?.map(studio => (
              <MenuItem key={studio.id} value={studio.id}>
                {studio.name}
              </MenuItem>
            ))}
          </Select>
          <IconButton size="small" onClick={() => setOpen(false)}>
            <FiX />
          </IconButton>
        </Stack>
        <Divider />
        {menus.map(menu => (
          <Fragment key={menu.id}>
            <List
              dense
              subheader={
                <ListSubheader sx={{ bgcolor: "transparent" }}>
                  {menu.title}
                </ListSubheader>
              }>
              {menu.items.map(item => (
                <Link
                  component={NextLink}
                  key={item.id}
                  href={item.link}
                  color="inherit"
                  underline="none">
                  <ListItemButton>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
            <Divider />
          </Fragment>
        ))}
      </Drawer>
    </>
  );
};

export default AdminGlobalLayout;
