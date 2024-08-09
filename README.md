# Class Matching Visualization Tool Documentation

## Introduction

### Overview of the Tool
The Class Matching Visualization Tool is a powerful React-based web application designed to help users analyze and visualize relationships and similarities between classes in a dataset. This tool enables users to upload datasets in either JSON or CSV format, specify how the data should be interpreted, and generate various visualizations—such as bar charts, pie charts, and scatter plots—to gain insights into class distributions and relationships.

### Key Features
- **Data Upload:** Supports JSON and CSV formats, allowing for flexible data input.
- **Customizable Keys:** Users can define which keys represent class names and their corresponding values.
- **Multiple Visualization Types:** Choose from a variety of charts, including bar charts, pie charts, scatter plots, and more.
- **Dynamic Interface:** The UI updates in real-time based on user inputs and the uploaded data.

### Target Audience
This tool is intended for:
- **Data Scientists and Analysts** who need to quickly visualize class-based data to identify patterns, outliers, and class imbalances.
- **Developers** seeking a customizable foundation for building more complex data visualization tools.
- **Educators and Students** exploring data analysis techniques and learning how to interpret visual data representations.

## Installation and Setup

### Prerequisites
- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Crocus-AI-Team/tool-for-class.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd tool-for-class
   ```
3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
4. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

### Running the Application
Once the development server is running, open your browser and navigate to `http://localhost:3000` to start using the tool.

### Directory Structure
- **src/**: Contains all the source code, including components, styles, and assets.
- **public/**: Public assets and the HTML template.
- **package.json**: Project metadata, dependencies, and scripts.

## Usage

### User Interface Overview
The interface is designed to be intuitive and user-friendly, with sections dedicated to data uploading, key configuration, and visualization selection. A dynamic display area showcases the selected visualization based on the user's input.

### Uploading Datasets
1. **Upload a File:**
   - Click the "Upload File" button.
   - Select a JSON or CSV file from your computer.
2. **Supported Data Formats:**
   - **JSON:** Objects containing keys for classes and associated values.
   - **CSV:** Columns representing classes and corresponding values.

### Configuring Visualization Options
- **Data Type:** Select either JSON or CSV from the dropdown menu.
- **Class Key:** Specify the key that identifies class names in the dataset.
- **Value Key:** Specify the key that identifies the values associated with each class.


# Dataset Structure Requirements

This guide provides the necessary structure for datasets to be used with the Class Matching Visualization Tool. The tool supports both JSON and CSV formats, and it requires specific keys to identify class names and their associated values.

## JSON Format

When using a JSON file, each entry should be an object with at least two keys: one for the class and one for the values.

### Example JSON Structure

```json
[
  {
    "class": "A",
    "values": [1, 2, 3, 4, 5]
  },
  {
    "class": "B",
    "values": [2, 3, 4, 5, 6]
  },
  {
    "class": "C",
    "values": [3, 4, 5, 6, 7]
  }
]
```

### JSON Key Requirements

- **Class Key:** This key should contain the name of the class, such as "A" or "B".
- **Value Key:** This key should contain an array of values associated with the class, like `[1, 2, 3, 4, 5]`.

## CSV Format

When using a CSV file, the structure should include two columns: one for the class and one for the values. The values should be a comma-separated list within a single cell.

### Example CSV Structure

```csv
class,values
A,"1,2,3,4,5"
B,"2,3,4,5,6"
C,"3,4,5,6,7"
```

### CSV Column Requirements

- **Class Column:** This column should list the names of the classes (e.g., A, B, C).
- **Values Column:** This column should contain a comma-separated string of values.

### Selecting Class and Value Keys
This tool provides the flexibility to select which keys in your dataset represent class names and their corresponding values. Simply enter the keys into the provided fields, and the tool will automatically update to reflect your selections.

### Viewing and Interpreting Visualizations
After configuring the dataset:
1. **Select a Class:** Choose a class from the dropdown menu to focus the visualization on that class.
2. **Choose a Visualization Type:** Select from various options, such as Bar Chart, Pie Chart, Scatter Plot, etc.
3. **Interpret the Visualization:** Analyze the visual output to understand class similarities, distributions, and potential imbalances.

### How This Tool Helps with Unbalanced Class Visualization
Unbalanced classes in datasets can lead to biased models and misleading insights if not properly addressed. This tool offers several features to help users identify and understand class imbalances:

- **Visual Comparison:** By visualizing class distributions through bar charts, pie charts, and scatter plots, users can quickly see which classes are underrepresented or overrepresented.
- **Similarity Analysis:** The tool calculates and visualizes the degree of similarity between classes, which can highlight whether certain classes share more characteristics with others, potentially masking or exacerbating imbalances.
- **Dynamic Exploration:** Users can interactively explore how different classes compare to one another, enabling a deeper understanding of how class imbalances may impact data analysis and modeling efforts.

By providing these insights, the tool helps users take proactive steps to address class imbalances, such as data augmentation, resampling techniques, or adjusting modeling strategies to ensure fair and accurate outcomes.

## Customization

### Modifying the User Interface
To customize the UI:
- **Styles:** Update styles in `App.css` or modify individual component styles.
- **Layout:** Adjust the component layout in `App.js` or related component files to fit your needs.

### Adding New Visualization Types
1. **Create a New Component:**
   - Add a new file in the `components` directory (e.g., `CustomChartComponent.js`).
2. **Include the Component in `App.js`:**
   - Import and integrate your new component.
3. **Update the UI:**
   - Add the new visualization type to the dropdown menu in the interface.

### Changing Default Settings
Modify initial values in `App.js` for:
- **Default Class Key:** Update the `classKey` state.
- **Default Value Key:** Update the `valueKey` state.

### Handling Data and Visualization Logic
- **Data Processing:** The main data processing functions (e.g., `processData`, `updateChartData`) are found in `App.js`. Customize these functions to alter how the data is interpreted and visualized.

## Development and Contribution

### Development Environment Setup
To set up a local development environment:
1. Follow the installation steps.
2. Ensure you have compatible versions of Node.js and npm/yarn.

### Code Structure and Key Components
- **App.js:** Manages the main application logic and state.
- **components/**: Contains reusable UI components like charts, selectors, and loaders.
- **styles/**: Includes all CSS files used in the application.

### Extending Functionality
- **Add New Features:** Create new components or modify existing ones to introduce additional features.
- **Fix Bugs:** Address issues by updating the relevant code in `App.js` or the affected component.

### Submitting Issues and Pull Requests
- **Report Issues:** Use the repository’s Issues tab on GitHub to report bugs or request new features.
- **Submit Contributions:** Follow best practices when submitting pull requests to ensure code quality and consistency.

### Coding Standards and Best Practices
- **ESLint:** Adhere to the ESLint rules for consistent code formatting.
- **Documentation:** Comment your code where necessary to improve readability and maintainability.

## API Documentation

### Overview of APIs Used
If applicable, this section would describe any APIs the tool interacts with. For this specific tool, no external APIs are required.

## Troubleshooting

### Common Issues and Solutions
- **File Upload Errors:** Ensure the file is properly formatted and has the correct extension (.json or .csv).
- **Visualization Not Updating:** Double-check that the class and value keys are correctly set and match the dataset structure.

### Understanding Console Errors and Warnings
- **React Warnings:** You may encounter warnings related to deprecated features or recommended practices. Address these by following the guidance provided in the console or updating the relevant code.

### Debugging Tips
- **Chrome DevTools:** Use DevTools to inspect elements, debug code, and monitor network activity.
- **Logging:** Insert `console.log` statements in `App.js` to trace data flow and monitor state changes.

## FAQ

### Frequently Asked Questions
1. **What file formats are supported?**
   - JSON and CSV.
2. **Can I add my own visualizations?**
   - Yes, you can extend the tool by following the guide in the Customization section.

## License

This project is licensed under the MIT License. For more details, refer to the LICENSE file included in the repository.

## Changelog

### Version 1.0.0
- **Initial Release:**
  - Support for JSON and CSV data uploads.
  - Multiple visualization types, including Bar Chart, Pie Chart, and more.
  - Interactive and dynamic UI.
