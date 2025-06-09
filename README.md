# Tender Enquiry Website

This is an offline website for creating tender enquiries with automatic model detail population.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dynamic Dropdowns**: Model type selection populates configuration options
- **Auto-Population**: Selecting model details automatically fills in codes and descriptions
- **Variant Selection**: Dynamic variant dropdowns based on model type
- **Tender Management**: Add items to tender, view in table format
- **Form Validation**: Required field validation
- **Export Functionality**: PDF export capability (placeholder)

## How to Use

1. **Fill Header Information**: Enter customer details, site, MT quote number, requested by, and date
2. **Select Model Type**: Choose from available model types (ESP, HTR, RED, etc.)
3. **Choose Configuration**: Select the appropriate configuration for the chosen model type
4. **Select Variants**: Choose variant options if available for the model type
5. **Review Auto-Populated Details**: Model code, description, control panel code and description will be automatically filled
6. **Add to Tender**: Click "Add Item to Tender" to add the item to your tender list
7. **Manage Items**: View added items in the tender table, remove items if needed
8. **Export**: Use the export functionality to generate PDF (when implemented)

## File Structure

```
tender-enquiry-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Styling and responsive design
├── js/
│   ├── data.js            # Data management and JSON loading
│   └── script.js          # Main application logic
├── images/
│   └── logo.png           # Company logo
└── data/
    ├── model_details.json      # Complete model details
    ├── model_configurations.json # Model configurations by type
    └── model_variants.json     # Variant options by model type
```

## Data Structure

The website uses three main JSON files:

1. **model_details.json**: Contains complete model information organized by model type and configuration
2. **model_configurations.json**: Lists available configurations for each model type
3. **model_variants.json**: Defines variant options and their names for each model type

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Works offline (no internet connection required)

## Customization

- Modify CSS in `css/styles.css` for styling changes
- Update JSON files in `data/` folder to change available models and configurations
- Extend JavaScript in `js/script.js` for additional functionality

