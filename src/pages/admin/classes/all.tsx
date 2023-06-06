import { Class } from "@/API";
import useActiveStudio from "@/hooks/useActiveStudio";
import AdminGlobalLayout from "@/layouts/AdminGlobalLayout";
import ClassItem from "@/sections/admin/class/class-item/ClassItem";
import CreateClass from "@/sections/admin/class/CreateClass";
import { Services } from "@/services";
import {
  Button,
  Card,
  CardContent,
  List,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

export type ClassTab = "UPCOMING" | "ON-GOING" | "HISTORY";

const AllClasses = () => {
  const router = useRouter();
  const { activeStudio } = useActiveStudio();
  const [showCreateClass, setShowCreateClass] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<ClassTab>("UPCOMING");

  const { data } = useQuery({
    queryKey: ["classes", "all", activeTab],
    queryFn: async () => {
      const data = await Services.listClassesHandler({
        studioId: activeStudio!.id,
        filterType: activeTab,
      });
      const classList = data.listClasses.items as Class[];
      //class list group by date
      const classListGroupByDate = classList.reduce((acc, item) => {
        const date = dayjs(item.startDateTime).format("YYYY-MM-DD");
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {} as Record<string, Class[]>);
      return classListGroupByDate;
    },
    enabled: Boolean(activeStudio?.id),
  });

  console.log(data, "allclasses");

  return (
    <>
      <AdminGlobalLayout
        title="Classes"
        action={
          <Button onClick={() => setShowCreateClass(true)}>Create</Button>
        }>
        <Paper>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
            <Tab label="Upcoming" value="UPCOMING" />
            <Tab label="On Going" value="ON-GOING" />
            <Tab label="History" value="HISTORY" />
          </Tabs>
        </Paper>
        <Stack gap={2} mt={4}>
          {Object.entries(data ?? {}).map(([date, classList]) => (
            <Card key={date}>
              <CardContent>
                <Stack gap={1}>
                  <Typography
                    textTransform="uppercase"
                    variant="caption"
                    color={
                      activeTab === "UPCOMING"
                        ? "primary"
                        : activeTab === "ON-GOING"
                        ? "green"
                        : "maroon"
                    }>
                    {dayjs(date).format("MMMM D, YYYY - dddd")}
                  </Typography>
                  <List dense>
                    {classList.map(item => (
                      <ClassItem key={item.id} item={item} />
                    ))}
                  </List>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </AdminGlobalLayout>
      <CreateClass
        open={showCreateClass}
        onClose={() => setShowCreateClass(false)}
      />
    </>
  );
};

export default AllClasses;
