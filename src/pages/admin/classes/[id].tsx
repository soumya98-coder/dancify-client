import { Class } from "@/API";
import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import { Services } from "@/services";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const ClassDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery({
    queryKey: ["classes", id],
    queryFn: async () => {
      const data = await Services.getClassHandler(id as string);
      return data.getClass as Class;
    },
  });

  console.log(data, "classdetails");

  return (
    <AdminGlobalLayout title={data?.name ?? ""}>
      <Card>
        <CardHeader
          title="Studio"
          titleTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent>
          <Stack gap={1}>
            <Typography
              textTransform="uppercase"
              variant="caption"
              color="primary">
              {data?.Studio.name}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </AdminGlobalLayout>
  );
};

export default ClassDetails;
