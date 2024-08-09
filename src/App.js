import React, { useState, useEffect } from 'react';
import './App.css';
import ClassSelector from './components/ClassSelector/ClassSelector';
import BarChartComponent from './components/BarChartComponent/BarChartComponent';
import HistogramComponent from './components/HistogramComponent/HistogramComponent';
import BoxPlotComponent from './components/BoxPlotComponent/BoxPlotComponent';
import PieChartComponent from './components/PieChartComponent/PieChartComponent';
import ScatterPlotComponent from './components/ScatterPlotComponent/ScatterPlotComponent';
import LineChartComponent from './components/LineChartComponent/LineChartComponent';
import AreaChartComponent from './components/AreaChartComponent/AreaChartComponent';
import RadarChartComponent from './components/RadarChartComponent/RadarChartComponent';
import TreemapComponent from './components/TreemapComponent/TreemapComponent';
import HeatmapComponent from './components/HeatmapComponent/HeatmapComponent';
import { FormControl, InputLabel, MenuItem, Select, Button, TextField } from '@mui/material';
import Papa from 'papaparse';

function App() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [chartData, setChartData] = useState([]);
  const [scatterData, setScatterData] = useState([]);
  const [data, setData] = useState([]);
  const [visualizationType, setVisualizationType] = useState('bar');
  const [dataType, setDataType] = useState('json');
  const [classKey, setClassKey] = useState('class'); // State for the class key
  const [valueKey, setValueKey] = useState('values'); // State for the value key

  const handleClassChange = (selectedClass) => {
    setSelectedClass(selectedClass);
    updateChartData(selectedClass, data);
  };

  const updateChartData = (selectedClass, data) => {
    const selectedClassData = data.find(item => item[classKey] === selectedClass);
    const similarities = data.map(item => {
      if (item[classKey] !== selectedClass) {
        const matchCount = selectedClassData[valueKey].filter(value => item[valueKey].includes(value)).length;
        return { name: item[classKey], value: matchCount };
      }
      return null;
    }).filter(item => item !== null);

    setChartData(similarities);
    setScatterData(similarities.map(item => ({ x: item.name, y: item.value, value: item.value })));
  };

  const handleVisualizationChange = (event) => {
    setVisualizationType(event.target.value);
  };

  const handleDataTypeChange = (event) => {
    setDataType(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      if (dataType === 'json') {
        const jsonData = JSON.parse(content);
        processData(jsonData);
      } else if (dataType === 'csv') {
        Papa.parse(content, {
          header: true,
          complete: (result) => {
            const parsedData = result.data.map(row => {
              if (row[valueKey]) {
                return {
                  ...row,
                  [valueKey]: row[valueKey].split(',').map(value => value.trim())
                };
              } else {
                return {
                  ...row,
                  [valueKey]: []
                };
              }
            });
            processData(parsedData);
          }
        });
      }
    };
    reader.readAsText(file);
  };

  const processData = (data) => {
    console.log("Processing Data: ", data);
    const uniqueClasses = [...new Set(data.map(item => item[classKey]))];
    console.log("Unique Classes: ", uniqueClasses);
    setClasses(uniqueClasses);
    if (uniqueClasses.length > 0) {
      setSelectedClass(uniqueClasses[0]);
      updateChartData(uniqueClasses[0], data);
    }
    setData(data);
  };

  useEffect(() => {
    if (data.length > 0) {
      processData(data);
    }
  }, [classKey, valueKey]);

  useEffect(() => {
    setClasses([]);
    setSelectedClass('');
    setChartData([]);
    setScatterData([]);
    setData([]);
  }, [dataType]);

  const renderVisualization = () => {
    switch (visualizationType) {
      case 'bar':
        return <BarChartComponent data={chartData} />;
      case 'histogram':
        return <HistogramComponent data={chartData} />;
      case 'boxplot':
        return <BoxPlotComponent data={chartData} />;
      case 'pie':
        return <PieChartComponent data={chartData} />;
      case 'scatter':
        return <ScatterPlotComponent data={scatterData} />;
      case 'line':
        return <LineChartComponent data={chartData} />;
      case 'area':
        return <AreaChartComponent data={chartData} />;
      case 'radar':
        return <RadarChartComponent data={chartData} />;
      case 'treemap':
        return <TreemapComponent data={chartData} />;
      case 'heatmap':
        return <HeatmapComponent data={scatterData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Class Matching Visualization Tool</h1>
      </header>
      <main className="App-main">
        <div className="control-panel">
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
            <Button variant="contained" color="primary" component="span" className="custom-button">
              Upload File
            </Button>
          </label>
          <TextField
            label="Class Key"
            variant="outlined"
            value={classKey}
            onChange={(e) => setClassKey(e.target.value)}
            className="form-control"
          />
          <TextField
            label="Value Key"
            variant="outlined"
            value={valueKey}
            onChange={(e) => setValueKey(e.target.value)}
            className="form-control"
          />
          <ClassSelector
            classes={classes}
            selectedClass={selectedClass}
            handleClassChange={handleClassChange}
          />
          <FormControl variant="outlined" className="form-control">
            <InputLabel>Visualization Type</InputLabel>
            <Select value={visualizationType} onChange={handleVisualizationChange} label="Visualization Type">
              <MenuItem value="bar">Bar Chart</MenuItem>
              <MenuItem value="histogram">Histogram</MenuItem>
              <MenuItem value="boxplot">Box Plot</MenuItem>
              <MenuItem value="pie">Pie Chart</MenuItem>
              <MenuItem value="scatter">Scatter Plot</MenuItem>
              <MenuItem value="line">Line Chart</MenuItem>
              <MenuItem value="area">Area Chart</MenuItem>
              <MenuItem value="radar">Radar Chart</MenuItem>
              <MenuItem value="treemap">Treemap</MenuItem>
              <MenuItem value="heatmap">Heatmap</MenuItem>
            </Select>
          </FormControl>
        </div>
        {renderVisualization()}
      </main>
    </div>
  );
}

export default App;
