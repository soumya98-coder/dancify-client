import React, { FC } from "react";
import { nanoid } from "nanoid";
import { LoadingButton } from "@mui/lab";
import { Chip, Stack, Typography } from "@mui/material";
import { Storage } from "aws-amplify";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

import FileImg from "@/components/FileImg";
import useUserData from "@/hooks/useUserData";
import { StepsDataType } from "@/pages/admin/create-studio";
import { Services } from "@/services";

interface Props {
  data: StepsDataType;
}

const Overview: FC<Props> = ({ data }) => {
  const {
    userData: { userID },
  } = useUserData();
  const { "0": basicData, "1": locationData } = data;

  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      const { name, details, featuredImage, danceStyles } = basicData;
      const location = await Services.createLocationHandler(locationData);
      const result = await Storage.put(
        `studios/${basicData.name.split(" ").join("-")}/${nanoid()}.jpg`,
        featuredImage
      );
      const studio = await Services.createStudioHandler({
        name,
        details,
        featuredImage: result.key,
        studioLocationId: location.createLocation.id,
        userID,
        //@ts-ignore
        danceStyles,
      });
      return studio.createStudio;
    },
    onSuccess: () => {
      toast.success("Studio Created Successfully.");
    },
  });

  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Typography variant="body1">{basicData.name}</Typography>
        <Typography variant="body2">{basicData.details}</Typography>
        <FileImg file={basicData.featuredImage as File} />
        <Stack direction="row" gap={1}>
          {basicData.danceStyles.map(style => {
            return <Chip key={style} label={style} size="small" />;
          })}
        </Stack>
      </Stack>
      <Typography variant="body2">
        {locationData.lineone}, {locationData.linetwo}, {locationData.landmark},{" "}
        {locationData.city},{locationData.district}, {locationData.state},{" "}
        {locationData.country}, {locationData.pincode}
      </Typography>
      <LoadingButton
        loading={isLoading}
        onClick={() => mutate()}
        variant="contained"
        color="primary"
        size="large">
        Create Studio
      </LoadingButton>
    </Stack>
  );
};

export default Overview;

{
  /* <Stack gap={2}>
  {creativesData.map((value, index) => {
    return (
      <Card key={index}>
        <FileImg file={value.link as File} />
        <CardContent>{value.description}</CardContent>
      </Card>
    );
  })}
</Stack>; */
}
