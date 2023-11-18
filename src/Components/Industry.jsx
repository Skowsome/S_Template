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
    value: 'Health & Care',
    label: 'Pharmaceuticals',
  },
  {
    value: 'Tech',
    label: 'Science & Technology',
  },
  {
    value: 'Travel',
    label: 'Travel & Tourism',
  },
  {
    value: 'Garments',
    label: 'Textile Industry',
  },
];

export default function Industry() {
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
          id="outlined-select-industry"
          select
          label="INDUSTRY"
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
