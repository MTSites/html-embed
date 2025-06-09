// DOM elements
let elements = {};

// Tender items array
let tenderItems = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, initializing application...');
    
    // Cache DOM elements
    cacheElements();
    
    // Load data
    const dataLoaded = await window.DataManager.loadData();
    if (!dataLoaded) {
        alert('Error loading data. Please refresh the page.');
        return;
    }
    
    // Initialize dropdowns
    initializeDropdowns();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set default date to today
    document.getElementById('date').valueAsDate = new Date();
    
    console.log('Application initialized successfully');
});

// Cache DOM elements for better performance
function cacheElements() {
    elements = {
        modelType: document.getElementById('model-type'),
        configuration: document.getElementById('configuration'),
        variant1: document.getElementById('variant-1'),
        variant2: document.getElementById('variant-2'),
        variant3: document.getElementById('variant-3'),
        variant4: document.getElementById('variant-4'),
        quantity: document.getElementById('quantity'),
        modelCode: document.getElementById('model-code'),
        modelDescription: document.getElementById('model-description'),
        controlPanelCode: document.getElementById('control-panel-code'),
        controlPanelDescription: document.getElementById('control-panel-description'),
        addToTender: document.getElementById('add-to-tender'),
        tenderItemsTable: document.getElementById('tender-items-table').getElementsByTagName('tbody')[0],
        resetForm: document.getElementById('reset-form'),
        clearAllItems: document.getElementById('clear-all-items'),
        exportToPdf: document.getElementById('export-to-pdf')
    };
}

// Initialize dropdown options
function initializeDropdowns() {
    // Populate model types
    populateModelTypes();
    
    // Hide all variant groups initially
    hideAllVariantGroups();
}

// Populate model type dropdown
function populateModelTypes() {
    const modelTypes = window.DataManager.getModelTypes();
    elements.modelType.innerHTML = '<option value="">Select Model Type</option>';
    
    modelTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        elements.modelType.appendChild(option);
    });
    
    console.log('Model types populated:', modelTypes);
}

// Populate configuration dropdown based on selected model type
function populateConfigurations(modelType) {
    elements.configuration.innerHTML = '<option value="">Select Configuration</option>';
    
    if (!modelType) return;
    
    const configurations = window.DataManager.getConfigurations(modelType);
    configurations.forEach(config => {
        const option = document.createElement('option');
        option.value = config;
        option.textContent = config;
        elements.configuration.appendChild(option);
    });
    
    console.log(`Configurations populated for ${modelType}:`, configurations);
}

// Populate variant dropdowns based on selected model type
function populateVariants(modelType) {
    hideAllVariantGroups();
    
    if (!modelType) return;
    
    const variants = window.DataManager.getVariants(modelType);
    
    // Populate each variant dropdown
    for (let i = 1; i <= 4; i++) {
        const variantKey = `Variant ${i}`;
        const variantElement = elements[`variant${i}`];
        const variantGroup = document.getElementById(`variant-${i}-group`);
        
        if (variants[variantKey] && variants[variantKey].options && variants[variantKey].options.length > 0) {
            const variant = variants[variantKey];
            
            // Clear and populate dropdown
            variantElement.innerHTML = `<option value="">Select ${variant.name}</option>`;
            variant.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                variantElement.appendChild(optionElement);
            });
            
            // Update label and show group
            const label = variantGroup.querySelector('label');
            label.textContent = variant.name;
            variantGroup.classList.add('show');
            
            console.log(`Variant ${i} (${variant.name}) populated with options:`, variant.options);
        }
    }
}

// Hide all variant groups
function hideAllVariantGroups() {
    for (let i = 1; i <= 4; i++) {
        const variantGroup = document.getElementById(`variant-${i}-group`);
        variantGroup.classList.remove('show');
        elements[`variant${i}`].innerHTML = '<option value="">Select Variant</option>';
    }
}

// Auto-populate model details based on selections
function autoPopulateDetails() {
    const modelType = elements.modelType.value;
    const configuration = elements.configuration.value;
    
    console.log('Auto-populating details for:', { modelType, configuration });
    
    if (!modelType || !configuration) {
        clearAutoPopulatedFields();
        return;
    }
    
    // Collect variant selections
    const variants = {};
    for (let i = 1; i <= 4; i++) {
        const variantValue = elements[`variant${i}`].value;
        if (variantValue && variantValue.trim() !== '') {
            variants[`Variant ${i}`] = variantValue;
        }
    }
    
    console.log('Selected variants:', variants);
    
    // Find matching model details
    const modelDetails = window.DataManager.findModelDetails(modelType, configuration, variants);
    
    if (modelDetails) {
        console.log('Found model details:', modelDetails);
        
        elements.modelCode.value = modelDetails['Model Code'] || '';
        elements.modelDescription.value = modelDetails['Model Description'] || '';
        elements.controlPanelCode.value = modelDetails['Control Panel Code'] || '';
        elements.controlPanelDescription.value = modelDetails['Control Panel Description'] || '';
        
        // Add visual feedback
        elements.modelCode.style.backgroundColor = '#e8f5e8';
        elements.modelDescription.style.backgroundColor = '#e8f5e8';
        elements.controlPanelCode.style.backgroundColor = '#e8f5e8';
        elements.controlPanelDescription.style.backgroundColor = '#e8f5e8';
        
        setTimeout(() => {
            elements.modelCode.style.backgroundColor = '';
            elements.modelDescription.style.backgroundColor = '';
            elements.controlPanelCode.style.backgroundColor = '';
            elements.controlPanelDescription.style.backgroundColor = '';
        }, 1000);
        
    } else {
        console.log('No model details found');
        clearAutoPopulatedFields();
    }
}

// Clear auto-populated fields
function clearAutoPopulatedFields() {
    elements.modelCode.value = '';
    elements.modelDescription.value = '';
    elements.controlPanelCode.value = '';
    elements.controlPanelDescription.value = '';
}

// Set up event listeners
function setupEventListeners() {
    // Model type change
    elements.modelType.addEventListener('change', function() {
        const modelType = this.value;
        console.log('Model type changed to:', modelType);
        
        populateConfigurations(modelType);
        populateVariants(modelType);
        clearAutoPopulatedFields();
        
        // Reset dependent dropdowns
        elements.configuration.value = '';
        resetVariantSelections();
    });
    
    // Configuration change
    elements.configuration.addEventListener('change', function() {
        const configuration = this.value;
        console.log('Configuration changed to:', configuration);
        autoPopulateDetails();
    });
    
    // Variant changes
    for (let i = 1; i <= 4; i++) {
        elements[`variant${i}`].addEventListener('change', function() {
            const variantValue = this.value;
            console.log(`Variant ${i} changed to:`, variantValue);
            autoPopulateDetails();
        });
    }
    
    // Add to tender button
    elements.addToTender.addEventListener('click', function() {
        addItemToTender();
    });
    
    // Form actions
    elements.resetForm.addEventListener('click', function() {
        resetForm();
    });
    
    elements.clearAllItems.addEventListener('click', function() {
        clearAllItems();
    });
    
    elements.exportToPdf.addEventListener('click', function() {
        exportToPdf();
    });
}

// Reset variant selections
function resetVariantSelections() {
    for (let i = 1; i <= 4; i++) {
        elements[`variant${i}`].value = '';
    }
}

// Add item to tender
function addItemToTender() {
    const modelCode = elements.modelCode.value;
    const modelDescription = elements.modelDescription.value;
    const controlPanelCode = elements.controlPanelCode.value;
    const controlPanelDescription = elements.controlPanelDescription.value;
    const quantity = parseInt(elements.quantity.value) || 1;
    
    if (!modelCode || !modelDescription) {
        alert('Please select a model type and configuration first.');
        return;
    }
    
    // Create tender item
    const tenderItem = {
        id: Date.now(), // Simple ID generation
        modelCode,
        modelDescription,
        controlPanelCode,
        controlPanelDescription,
        quantity
    };
    
    // Add to array
    tenderItems.push(tenderItem);
    
    // Update table
    updateTenderItemsTable();
    
    // Reset model selection form
    resetModelSelection();
    
    console.log('Item added to tender:', tenderItem);
}

// Update tender items table
function updateTenderItemsTable() {
    // Clear existing rows
    elements.tenderItemsTable.innerHTML = '';
    
    if (tenderItems.length === 0) {
        const row = elements.tenderItemsTable.insertRow();
        row.className = 'no-items';
        const cell = row.insertCell();
        cell.colSpan = 7;
        cell.textContent = 'No items added to tender yet';
        return;
    }
    
    // Add items
    tenderItems.forEach((item, index) => {
        const row = elements.tenderItemsTable.insertRow();
        
        // Item number
        const cellNumber = row.insertCell();
        cellNumber.textContent = index + 1;
        
        // Model code
        const cellModelCode = row.insertCell();
        cellModelCode.textContent = item.modelCode;
        
        // Model description
        const cellModelDesc = row.insertCell();
        cellModelDesc.textContent = item.modelDescription;
        cellModelDesc.style.maxWidth = '200px';
        cellModelDesc.style.wordWrap = 'break-word';
        
        // Control panel code
        const cellControlCode = row.insertCell();
        cellControlCode.textContent = item.controlPanelCode;
        
        // Control panel description
        const cellControlDesc = row.insertCell();
        cellControlDesc.textContent = item.controlPanelDescription;
        cellControlDesc.style.maxWidth = '200px';
        cellControlDesc.style.wordWrap = 'break-word';
        
        // Quantity
        const cellQuantity = row.insertCell();
        cellQuantity.textContent = item.quantity;
        
        // Actions
        const cellActions = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.className = 'btn secondary';
        deleteButton.style.fontSize = '12px';
        deleteButton.style.padding = '6px 12px';
        deleteButton.onclick = () => removeItem(item.id);
        cellActions.appendChild(deleteButton);
    });
}

// Remove item from tender
function removeItem(itemId) {
    tenderItems = tenderItems.filter(item => item.id !== itemId);
    updateTenderItemsTable();
    console.log('Item removed from tender, ID:', itemId);
}

// Reset model selection form
function resetModelSelection() {
    elements.modelType.value = '';
    elements.configuration.value = '';
    resetVariantSelections();
    elements.quantity.value = '1';
    clearAutoPopulatedFields();
    hideAllVariantGroups();
    populateConfigurations('');
}

// Reset entire form
function resetForm() {
    if (confirm('Are you sure you want to reset the entire form? This will clear all data.')) {
        // Reset header fields
        document.getElementById('customer').value = '';
        document.getElementById('site').value = '';
        document.getElementById('mt-quote').value = '';
        document.getElementById('requested-by').value = '';
        document.getElementById('date').valueAsDate = new Date();
        
        // Reset model selection
        resetModelSelection();
        
        // Reset comments
        document.getElementById('comments').value = '';
        
        // Clear tender items
        tenderItems = [];
        updateTenderItemsTable();
        
        console.log('Form reset');
    }
}

// Clear all items
function clearAllItems() {
    if (confirm('Are you sure you want to clear all tender items?')) {
        tenderItems = [];
        updateTenderItemsTable();
        console.log('All tender items cleared');
    }
}

// Export to PDF (placeholder function)
function exportToPdf() {
    alert('PDF export functionality would be implemented here. This is a demo version.');
}

