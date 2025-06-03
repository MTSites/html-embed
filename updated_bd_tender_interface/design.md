# BD Team Tender Enquiry Interface Design

## Overview
This document outlines the design for a simple interface that allows the BD team to create tender enquiries with multiple items, using cascading dropdowns and auto-populated fields.

## Interface Components

### 1. Header Section
- **Customer**: Text input field
- **Site**: Text input field
- **MT Quote**: Text input field
- **Requested By**: Text input field
- **Date**: Date picker (defaults to current date)

### 2. Item Selection Section
- **Model Type Dropdown**: ESP, HTR270, HTR400, IRM, RED400, RED600, RER, RTF, UCC, WHIMS
- **Configuration Description Dropdown**: Populated based on Model Type selection
- **Variant 1 Dropdown**: Populated based on Configuration selection
- **Variant 2 Dropdown**: Populated based on Configuration selection
- **Variant 3 Dropdown**: Populated based on Configuration selection
- **Quantity**: Number input field (default: 1)

### 3. Auto-Populated Fields
- **Model Code**: Read-only field, populated based on selections
- **Model Description**: Read-only field, populated based on selections
- **Control Panel Code**: Read-only field, populated from same row as model
- **Control Panel Description**: Read-only field, populated from same row as model

### 4. Item Management
- **Add Item Button**: Adds current selection to the tender items list
- **Items Table**: Displays all added items with columns for:
  - Item Number (auto-incremented)
  - Model Type
  - Configuration
  - Variants
  - Model Code
  - Model Description
  - Control Panel Code
  - Control Panel Description
  - Quantity
  - Actions (Remove button)

### 5. Form Actions
- **Reset Form Button**: Clears all selections
- **Clear All Items Button**: Removes all items from the tender
- **Export to PDF Button**: Generates a PDF of the tender enquiry

## Layout Design
- Clean, professional interface with Bootstrap styling
- Responsive design that works on desktop and tablet devices
- Clear visual hierarchy with section headings
- Form validation to ensure all required fields are completed

## User Flow
1. User fills in header information
2. User selects model type from dropdown
3. User selects configuration from filtered dropdown
4. User selects variants from filtered dropdowns
5. Model and control panel details auto-populate
6. User enters quantity and clicks "Add Item"
7. Item appears in the items table
8. User repeats steps 2-7 to add more items
9. User clicks "Export to PDF" when finished

## PDF Export Design
- Professional layout with company header
- Tender enquiry header information at the top
- Table of all items with their details
- Footer with date and page numbers
- Uses WeasyPrint for high-quality PDF generation

## Technical Considerations
- All data will be embedded in JavaScript for offline use
- Cascading dropdown logic will filter options based on previous selections
- Form validation will ensure all required fields are completed before submission
- PDF generation will use WeasyPrint for high-quality output
