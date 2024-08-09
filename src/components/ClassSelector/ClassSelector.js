import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ClassSelector = ({ classes, selectedClass, handleClassChange }) => {
  return (
    <FormControl variant="outlined" className="form-control">
      <InputLabel>Sınıf Seçin</InputLabel>
      <Select
        value={selectedClass}
        onChange={(e) => handleClassChange(e.target.value)}
        label="Sınıf Seçin"
      >
        {classes.map((cls) => (
          <MenuItem key={cls} value={cls}>
            {cls}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ClassSelector;
