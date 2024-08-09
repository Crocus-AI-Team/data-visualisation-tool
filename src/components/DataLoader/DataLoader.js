import React from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './DataLoader.css';

const DataLoader = ({ handleFileUpload, handleDataTypeChange, dataType }) => {
  return (
    <div className="data-loader">
      <FormControl variant="outlined" className="form-control">
        <InputLabel>Data Type</InputLabel>
        <Select value={dataType} onChange={handleDataTypeChange} label="Data Type">
          <MenuItem value="json">JSON</MenuItem>
          <MenuItem value="csv">CSV</MenuItem>
        </Select>
      </FormControl>
      <input
        accept=".json,.csv"
        className="file-input"
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" color="primary" component="span">
          Upload File
        </Button>
      </label>
    </div>
  );
};

export default DataLoader;
