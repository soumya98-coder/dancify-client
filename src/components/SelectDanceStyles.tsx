import { danceStyles } from "@/data/danceStyles";
import {
  Checkbox,
  Chip,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { FC } from "react";

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
  error?: boolean;
  helperText?: string | string[];
}

const SelectDanceStyles: FC<Props> = ({
  value,
  onChange,
  error = false,
  helperText = "",
}) => {
  return (
    <Stack gap={1}>
      <InputLabel htmlFor="danceStyles">Dance Styles</InputLabel>
      <div>
        <Select
          fullWidth
          multiple
          value={value}
          name="danceStyles"
          renderValue={selected => (
            <Stack direction="row" flexWrap="wrap" gap={0.5}>
              {selected.map(id => (
                <Chip
                  key={id}
                  label={danceStyles.find(s => s.value === id)?.name}
                />
              ))}
            </Stack>
          )}
          onChange={e => {
            const value = e.target.value as any[];
            const selected = danceStyles.filter(style =>
              value.includes(style.value)
            );
            onChange(selected.map(s => s.value));
          }}
          error={error}>
          {danceStyles.map(style => (
            <MenuItem key={style.id} value={style.value}>
              <Checkbox checked={Boolean(value.find(v => v === style.value))} />
              <ListItemText primary={style.name} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={error} sx={{ mt: 0.5, ml: 2 }}>
          {helperText}
        </FormHelperText>
      </div>
    </Stack>
  );
};

export default SelectDanceStyles;
