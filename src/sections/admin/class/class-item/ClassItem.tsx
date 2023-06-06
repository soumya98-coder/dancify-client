import { Class } from "@/API";
import {
  Collapse,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import dayjs from "dayjs";
import React, { FC } from "react";
import { FiChevronDown } from "react-icons/fi";
import ClassDetails from "./ClassDetails";

interface Props {
  item: Class;
}

const ClassItem: FC<Props> = ({ item }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <ListItem disableGutters divider>
        <ListItemText
          primary={`${dayjs(item.startDateTime).format("h:mm a")} - ${dayjs(
            item.endDateTime
          ).format("h:mm a")}`}
          secondary={`${item.name} - ${
            item.classType === "OFFLINE" ? "In Person" : "Online"
          }`}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => setShow(p => !p)}>
            <FiChevronDown />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <ClassDetails classData={item} />
      </Collapse>
    </div>
  );
};

export default ClassItem;
