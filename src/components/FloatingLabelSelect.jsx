import React from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";

const FloatingLabelSelect = ({ label, hideLabel = false }) => {
  return (
    <Box pt={2.5}>
      {!hideLabel && (
        <Typography sx={{ pb: 1 }} variant="h6">
          {label}
        </Typography>
      )}
      <Autocomplete
        options={[]}
        renderInput={(prams) => (
          <TextField
            sx={{
              ".MuiInputBase-formControl": {
                borderRadius: "80px",
                backgroundColor: "grey.200",
                padding: "5px",
                paddingInline: "15px",
              },
            }}
            placeholder="Select"
            {...prams}
          />
        )}
      />
    </Box>
  );
};

export default FloatingLabelSelect;
