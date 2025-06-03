// Updated JavaScript for BD Team Tender Enquiry Interface with enhanced PDF export

document.addEventListener('DOMContentLoaded', function() {
    // Initialize date field with current date
    document.getElementById('dateInput').valueAsDate = new Date();
    
    // Initialize model type dropdown
    initializeModelTypeDropdown();
    
    // Set up event listeners for dropdowns
    setupDropdownEvents();
    
    // Set up event listeners for buttons
    setupButtonEvents();
});

// Initialize model type dropdown with options from data
function initializeModelTypeDropdown() {
    const modelTypeSelect = document.getElementById('modelTypeSelect');
    const modelTypes = Object.keys(MODEL_DATA.models);
    
    // Sort model types alphabetically
    modelTypes.sort();
    
    // Add options to dropdown
    modelTypes.forEach(modelType => {
        const option = document.createElement('option');
        option.value = modelType;
        option.textContent = modelType;
        modelTypeSelect.appendChild(option);
    });
}

// Set up event listeners for all dropdowns
function setupDropdownEvents() {
    // Model type change event
    document.getElementById('modelTypeSelect').addEventListener('change', function() {
        const modelType = this.value;
        updateConfigurationDropdown(modelType);
        clearVariantDropdowns();
        clearAutoPopulatedFields();
        checkAddItemButtonState();
    });
    
    // Configuration change event
    document.getElementById('configSelect').addEventListener('change', function() {
        const config = this.value;
        updateVariantDropdowns(config);
        updateAutoPopulatedFields();
        checkAddItemButtonState();
    });
    
    // Variant change events
    document.getElementById('variant1Select').addEventListener('change', updateAutoPopulatedFields);
    document.getElementById('variant2Select').addEventListener('change', updateAutoPopulatedFields);
    document.getElementById('variant3Select').addEventListener('change', updateAutoPopulatedFields);
}

// Update configuration dropdown based on selected model type
function updateConfigurationDropdown(modelType) {
    const configSelect = document.getElementById('configSelect');
    
    // Clear existing options
    configSelect.innerHTML = '<option value="">Select Configuration</option>';
    
    // Disable if no model type selected
    if (!modelType) {
        configSelect.disabled = true;
        return;
    }
    
    // Get configurations for selected model type
    const configurations = MODEL_DATA.models[modelType] || [];
    
    // Add options to dropdown
    configurations.forEach(config => {
        const option = document.createElement('option');
        option.value = config;
        
        // Get description if available
        const description = MODEL_DATA.configurations[config]?.description || '';
        option.textContent = config + (description ? ` - ${description}` : '');
        
        configSelect.appendChild(option);
    });
    
    // Enable dropdown if options available
    configSelect.disabled = configurations.length === 0;
}

// Clear all variant dropdowns
function clearVariantDropdowns() {
    const variant1Select = document.getElementById('variant1Select');
    const variant2Select = document.getElementById('variant2Select');
    const variant3Select = document.getElementById('variant3Select');
    
    variant1Select.innerHTML = '<option value="">Select Variant 1</option>';
    variant2Select.innerHTML = '<option value="">Select Variant 2</option>';
    variant3Select.innerHTML = '<option value="">Select Variant 3</option>';
    
    variant1Select.disabled = true;
    variant2Select.disabled = true;
    variant3Select.disabled = true;
}

// Update variant dropdowns based on selected configuration
function updateVariantDropdowns(config) {
    const variant1Select = document.getElementById('variant1Select');
    const variant2Select = document.getElementById('variant2Select');
    const variant3Select = document.getElementById('variant3Select');
    
    // Clear existing options
    variant1Select.innerHTML = '<option value="">Select Variant 1</option>';
    variant2Select.innerHTML = '<option value="">Select Variant 2</option>';
    variant3Select.innerHTML = '<option value="">Select Variant 3</option>';
    
    // Disable if no configuration selected
    if (!config) {
        variant1Select.disabled = true;
        variant2Select.disabled = true;
        variant3Select.disabled = true;
        return;
    }
    
    // Get variants for selected configuration
    const variant1Values = MODEL_DATA.variants.variant1[config] || [];
    const variant2Values = MODEL_DATA.variants.variant2[config] || [];
    const variant3Values = MODEL_DATA.variants.variant3[config] || [];
    
    // Add options to variant 1 dropdown
    variant1Values.forEach(variant => {
        if (variant) {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            variant1Select.appendChild(option);
        }
    });
    
    // Add options to variant 2 dropdown
    variant2Values.forEach(variant => {
        if (variant) {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            variant2Select.appendChild(option);
        }
    });
    
    // Add options to variant 3 dropdown
    variant3Values.forEach(variant => {
        if (variant) {
            const option = document.createElement('option');
            option.value = variant;
            option.textContent = variant;
            variant3Select.appendChild(option);
        }
    });
    
    // Enable dropdowns if options available
    variant1Select.disabled = variant1Values.length === 0;
    variant2Select.disabled = variant2Values.length === 0;
    variant3Select.disabled = variant3Values.length === 0;
}

// Clear auto-populated fields
function clearAutoPopulatedFields() {
    document.getElementById('modelCodeInput').value = '';
    document.getElementById('modelDescInput').value = '';
    document.getElementById('controlPanelCodeInput').value = '';
    document.getElementById('controlPanelDescInput').value = '';
}

// Update auto-populated fields based on selections
function updateAutoPopulatedFields() {
    const config = document.getElementById('configSelect').value;
    const variant1 = document.getElementById('variant1Select').value;
    const variant2 = document.getElementById('variant2Select').value;
    const variant3 = document.getElementById('variant3Select').value;
    
    // Clear fields if no configuration selected
    if (!config) {
        clearAutoPopulatedFields();
        return;
    }
    
    // Find matching model in data
    const matchingModel = findMatchingModel(config, variant1, variant2, variant3);
    
    // Update fields if match found
    if (matchingModel) {
        document.getElementById('modelCodeInput').value = matchingModel.model_code;
        document.getElementById('modelDescInput').value = matchingModel.model_description;
        document.getElementById('controlPanelCodeInput').value = matchingModel.control_panel_code;
        document.getElementById('controlPanelDescInput').value = matchingModel.control_panel_description;
    } else {
        clearAutoPopulatedFields();
    }
    
    // Check if Add Item button should be enabled
    checkAddItemButtonState();
}

// Find matching model in data based on selections
function findMatchingModel(config, variant1, variant2, variant3) {
    // Filter models by configuration
    let matches = ALL_MODELS.filter(model => model.config === config);
    
    // Filter by variants if selected
    if (variant1) {
        matches = matches.filter(model => !model.variant1 || model.variant1 === variant1);
    }
    
    if (variant2) {
        matches = matches.filter(model => !model.variant2 || model.variant2 === variant2);
    }
    
    if (variant3) {
        matches = matches.filter(model => !model.variant3 || model.variant3 === variant3);
    }
    
    // Return first match or null
    return matches.length > 0 ? matches[0] : null;
}

// Check if Add Item button should be enabled
function checkAddItemButtonState() {
    const addItemBtn = document.getElementById('addItemBtn');
    const modelCode = document.getElementById('modelCodeInput').value;
    const controlPanelCode = document.getElementById('controlPanelCodeInput').value;
    
    // Enable button if both codes are populated
    addItemBtn.disabled = !modelCode || !controlPanelCode;
}

// Set up event listeners for buttons
function setupButtonEvents() {
    // Add Item button
    document.getElementById('addItemBtn').addEventListener('click', addItemToTender);
    
    // Reset Form button
    document.getElementById('resetFormBtn').addEventListener('click', resetForm);
    
    // Clear All Items button
    document.getElementById('clearItemsBtn').addEventListener('click', clearAllItems);
    
    // Export to PDF button
    document.getElementById('exportPdfBtn').addEventListener('click', promptForFilename);
}

// Add current selection to tender items
function addItemToTender() {
    // Get selected values
    const modelType = document.getElementById('modelTypeSelect').value;
    const config = document.getElementById('configSelect').value;
    const variant1 = document.getElementById('variant1Select').value;
    const variant2 = document.getElementById('variant2Select').value;
    const variant3 = document.getElementById('variant3Select').value;
    const quantity = document.getElementById('quantityInput').value;
    const modelCode = document.getElementById('modelCodeInput').value;
    const modelDesc = document.getElementById('modelDescInput').value;
    const controlPanelCode = document.getElementById('controlPanelCodeInput').value;
    const controlPanelDesc = document.getElementById('controlPanelDescInput').value;
    
    // Validate required fields
    if (!modelType || !config || !quantity || !modelCode || !controlPanelCode) {
        alert('Please complete all required fields');
        return;
    }
    
    // Remove "no items" row if present
    const noItemsRow = document.getElementById('noItemsRow');
    if (noItemsRow) {
        noItemsRow.remove();
    }
    
    // Get table body
    const tableBody = document.getElementById('itemsTableBody');
    
    // Create new row
    const newRow = document.createElement('tr');
    
    // Generate item number (count of existing rows + 1)
    const itemNumber = tableBody.children.length + 1;
    
    // Combine variants
    const variants = [variant1, variant2, variant3].filter(Boolean).join(', ');
    
    // Set row content with updated column order
    newRow.innerHTML = `
        <td>${itemNumber}</td>
        <td>${modelCode}</td>
        <td>${modelDesc}</td>
        <td>${controlPanelCode}</td>
        <td>${controlPanelDesc}</td>
        <td>${quantity}</td>
        <td>
            <button type="button" class="btn btn-remove-item">Remove</button>
            <button type="button" class="btn btn-edit-qty">Edit Qty</button>
        </td>
    `;
    
    // Add data attributes for PDF export
    newRow.dataset.modelType = modelType;
    newRow.dataset.config = config;
    newRow.dataset.variants = variants;
    
    // Add event listener to remove button
    newRow.querySelector('.btn-remove-item').addEventListener('click', function() {
        removeItem(newRow);
    });
    
    // Add event listener to edit quantity button
    newRow.querySelector('.btn-edit-qty').addEventListener('click', function() {
        editQuantity(newRow);
    });
    
    // Add row to table
    tableBody.appendChild(newRow);
    
    // Reset selection fields but keep header fields
    resetSelectionFields();
}

// Edit quantity of an item
function editQuantity(row) {
    const currentQty = row.cells[5].textContent;
    const newQty = prompt('Enter new quantity:', currentQty);
    
    if (newQty !== null && newQty.trim() !== '') {
        const qty = parseInt(newQty);
        if (!isNaN(qty) && qty > 0) {
            row.cells[5].textContent = qty;
        } else {
            alert('Please enter a valid quantity (must be a positive number)');
        }
    }
}

// Remove item from tender
function removeItem(row) {
    // Remove the row
    row.remove();
    
    // Get table body
    const tableBody = document.getElementById('itemsTableBody');
    
    // If no items left, add "no items" row
    if (tableBody.children.length === 0) {
        const noItemsRow = document.createElement('tr');
        noItemsRow.id = 'noItemsRow';
        noItemsRow.innerHTML = '<td colspan="7" class="no-items-message">No items added to tender yet</td>';
        tableBody.appendChild(noItemsRow);
    } else {
        // Renumber remaining items
        Array.from(tableBody.children).forEach((row, index) => {
            if (row.id !== 'noItemsRow') {
                row.cells[0].textContent = index + 1;
            }
        });
    }
}

// Reset selection fields but keep header fields
function resetSelectionFields() {
    document.getElementById('modelTypeSelect').selectedIndex = 0;
    document.getElementById('configSelect').innerHTML = '<option value="">Select Configuration</option>';
    document.getElementById('configSelect').disabled = true;
    clearVariantDropdowns();
    clearAutoPopulatedFields();
    document.getElementById('quantityInput').value = 1;
    document.getElementById('addItemBtn').disabled = true;
}

// Reset entire form
function resetForm() {
    // Reset header fields
    document.getElementById('customerInput').value = '';
    document.getElementById('siteInput').value = '';
    document.getElementById('mtQuoteInput').value = '';
    document.getElementById('requestedByInput').value = '';
    document.getElementById('dateInput').valueAsDate = new Date();
    
    // Reset selection fields
    resetSelectionFields();
}

// Clear all items from tender
function clearAllItems() {
    if (confirm('Are you sure you want to remove all items from this tender?')) {
        const tableBody = document.getElementById('itemsTableBody');
        tableBody.innerHTML = '';
        
        // Add "no items" row
        const noItemsRow = document.createElement('tr');
        noItemsRow.id = 'noItemsRow';
        noItemsRow.innerHTML = '<td colspan="7" class="no-items-message">No items added to tender yet</td>';
        tableBody.appendChild(noItemsRow);
    }
}

// Prompt for filename before exporting to PDF
function promptForFilename() {
    // Validate header fields
    const customer = document.getElementById('customerInput').value;
    const site = document.getElementById('siteInput').value;
    const mtQuote = document.getElementById('mtQuoteInput').value;
    const requestedBy = document.getElementById('requestedByInput').value;
    const date = document.getElementById('dateInput').value;
    
    if (!customer || !site || !mtQuote || !requestedBy || !date) {
        alert('Please complete all header fields before exporting');
        return;
    }
    
    // Check if there are items in the tender
    const tableBody = document.getElementById('itemsTableBody');
    if (tableBody.children.length === 0 || document.getElementById('noItemsRow')) {
        alert('Please add at least one item to the tender before exporting');
        return;
    }
    
    // Create default filename
    const defaultFilename = `Tender_${customer.replace(/\s+/g, '_')}_${formatDate(date).replace(/\//g, '-')}`;
    
    // Create modal for filename input
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'filenameModal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'filenameModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filenameModalLabel">Export to PDF</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="filenameInput" class="form-label">Enter filename:</label>
                        <input type="text" class="form-control" id="filenameInput" value="${defaultFilename}">
                        <small class="form-text text-muted">The file will be saved with .pdf extension</small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmExportBtn">Export</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.appendChild(modal);
    
    // Initialize modal
    const modalElement = new bootstrap.Modal(document.getElementById('filenameModal'));
    modalElement.show();
    
    // Add event listener to confirm button
    document.getElementById('confirmExportBtn').addEventListener('click', function() {
        const filename = document.getElementById('filenameInput').value.trim() || defaultFilename;
        modalElement.hide();
        
        // Remove modal after hiding
        document.getElementById('filenameModal').addEventListener('hidden.bs.modal', function() {
            document.body.removeChild(modal);
            exportToPdf(filename);
        });
    });
}

// Export tender to PDF with specified filename
function exportToPdf(filename) {
    // Get header information
    const customer = document.getElementById('customerInput').value;
    const site = document.getElementById('siteInput').value;
    const mtQuote = document.getElementById('mtQuoteInput').value;
    const requestedBy = document.getElementById('requestedByInput').value;
    const date = document.getElementById('dateInput').value;
    
    // Create PDF content
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('Tender Enquiry', 105, 20, { align: 'center' });
    
    // Add header information
    doc.setFontSize(12);
    doc.text(`Customer: ${customer}`, 20, 40);
    doc.text(`Site: ${site}`, 20, 50);
    doc.text(`MT Quote: ${mtQuote}`, 20, 60);
    doc.text(`Requested By: ${requestedBy}`, 120, 40);
    doc.text(`Date: ${formatDate(date)}`, 120, 50);
    
    // Add items table with updated column order
    const headers = ['#', 'Model Code', 'Model Description', 'Control Panel Code', 'Control Panel Description', 'Qty'];
    const rows = [];
    
    // Get items from table
    const tableBody = document.getElementById('itemsTableBody');
    Array.from(tableBody.children).forEach(row => {
        if (row.id !== 'noItemsRow') {
            rows.push([
                row.cells[0].textContent,
                row.cells[1].textContent,
                row.cells[2].textContent,
                row.cells[3].textContent,
                row.cells[4].textContent,
                row.cells[5].textContent
            ]);
        }
    });
    
    // Add table to PDF
    doc.autoTable({
        head: [headers],
        body: rows,
        startY: 70,
        margin: { top: 70 },
        styles: { overflow: 'linebreak' },
        columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 30 },
            2: { cellWidth: 40 },
            3: { cellWidth: 30 },
            4: { cellWidth: 40 },
            5: { cellWidth: 15 }
        },
        headStyles: {
            fillColor: [51, 51, 51],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(`Page ${i} of ${pageCount}`, 105, doc.internal.pageSize.height - 10, { align: 'center' });
        doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, doc.internal.pageSize.height - 10);
    }
    
    // Save PDF with specified filename
    doc.save(`${filename}.pdf`);
}

// Format date as DD/MM/YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}
