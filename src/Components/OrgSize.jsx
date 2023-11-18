import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const sizing = [
  {
    value: 'Select',
    label: '--Select--',
  },
  {
    value: 'In terms of Hundred',
    label: '>=999 Peoples',
  },
  {
    value: 'In terms of Thousands',
    label: '>=99999 Peoples',
  },
  {
    value: 'In terms of Lacs',
    label: '>=9999999 Peoples',
  },
];

export default function OrgSize() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' }, Display: 'block', alignItems:'left',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-sizing"
          select
          label="ORGANIZATION SIZE"
          defaultValue="Select"
        >
          {sizing.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
