import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import CreateSubscription from "@/sections/admin/subscription/CreateSubscription";
import { useQuery } from "react-query";
import { Services } from "@/services";
import useUserData from "@/hooks/useUserData";
import useActiveStudio from "@/hooks/useActiveStudio";
import { SubscriptionPlan } from "@/API";
import { FiEdit2 } from "react-icons/fi";
import { danceStyleValues } from "@/data/danceStyles";
import RichTextViewer from "@/components/RichTextViewer";

const SubscriptionPlan = () => {
  const { activeStudio } = useActiveStudio();
  const [showCreateSubscription, setShowCreateSubscription] =
    React.useState(false);

  const { data } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const data = await Services.listSubscriptionPlansHandler(
        activeStudio!.id
      );
      return data.listSubscriptionPlans.items as SubscriptionPlan[];
    },
    enabled: Boolean(activeStudio?.id),
  });

  console.log(data, "subscriptions");

  return (
    <>
      <AdminGlobalLayout
        title="Subscriptions"
        action={
          <Button onClick={() => setShowCreateSubscription(true)}>
            Create
          </Button>
        }>
        {data?.map(subscription => (
          <Card key={subscription.id}>
            <CardContent>
              <Stack gap={1}>
                <Typography
                  textTransform="uppercase"
                  variant="caption"
                  color="primary">
                  {subscription.name}
                </Typography>
                <Stack direction="row" gap={1} flexWrap="wrap">
                  {subscription.danceStyles?.map(danceStyle => (
                    <Chip
                      label={danceStyleValues[danceStyle]}
                      sx={{ fontSize: "12px" }}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <RichTextViewer value={subscription.description} />
              </Stack>
            </CardContent>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Price
                  </TableCell>
                  <TableCell align="right">{subscription.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Disconted Price
                  </TableCell>
                  <TableCell align="right">
                    {subscription.discountedPrice}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Duration (Days)
                  </TableCell>
                  <TableCell align="right">
                    {subscription.durationInDays}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Max Allowed Classes
                  </TableCell>
                  <TableCell align="right">
                    {subscription.maxAllowedClasses}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        ))}
      </AdminGlobalLayout>
      <CreateSubscription
        open={showCreateSubscription}
        onClose={() => setShowCreateSubscription(false)}
      />
    </>
  );
};

export default SubscriptionPlan;
