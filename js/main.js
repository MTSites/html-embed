// Main JavaScript for BD Team Tender Enquiry Interface 
document.addEventListener('DOMContentLoaded', function () {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dateInput').value = today;
  document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);

  const modelTypeSelect = document.getElementById('modelTypeSelect');
  const configSelect = document.getElementById('configSelect');
  const variant1Select = document.getElementById('variant1Select');
  const variant2Select = document.getElementById('variant2Select');
  const variant3Select = document.getElementById('variant3Select');
  const variant4Select = document.getElementById('variant4Select');
  const variant1Label = document.getElementById('variant1Label');
  const variant2Label = document.getElementById('variant2Label');
  const variant3Label = document.getElementById('variant3Label');
  const variant4Label = document.getElementById('variant4Label');

  const modelTypes = ['ESP', 'HTR270', 'HTR400', 'IRM', 'RED400', 'RED600', 'RER', 'RTF', 'UCC', 'WHIMS'];
  modelTypes.forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelTypeSelect.appendChild(option);
    });

    function tryPopulateIfReady() {
  const selectedModel = modelTypeSelect.value;
  const selectedConfig = configSelect.value;

  // Safely get only the enabled variant values
  const v1 = variant1Select.disabled ? '' : variant1Select.value;
  const v2 = variant2Select.disabled ? '' : variant2Select.value;
  const v3 = variant3Select.disabled ? '' : variant3Select.value;
  const v4 = variant4Select.disabled ? '' : variant4Select.value;

  if (selectedModel && selectedConfig) {
    populateModelDetails(selectedModel, selectedConfig, v1, v2, v3, v4);
  }
}

  // Centralized fallback configurations
  const DEFAULT_CONFIGS = {
    RED400: [
      '1 Start x 2 Stage x 1000mm x \u00d8400mm',
      '1 Start x 1 Stage x 1000mm x \u00d8400mm + Scalper Drum',
      '1 Start x 1 Stage x 1500mm x \u00d8400mm',
      '1 Start x 1 Stage x 1500mm x \u00d8400mm (Scalper)',
      '1 Start x 1 Stage x 1000mm x \u00d8400mm',
      '1 Start x 1 Stage x 1000mm x \u00d8400mm (Scalper)',
      '1 Start x 3 Stage x 1000mm x \u00d8400mm',
      '1 Start x 2 Stage x 1000mm x \u00d8400mm + Scalper Drum',
      '1 Start x 2 Stage x 1500mm x \u00d8400mm',
      '1 Start x 1 Stage x 1500mm x \u00d8400mm + Scalper Drum',
      '1 Start x 3 Stage x 1500mm x \u00d8400mm',
      '1 Start x 2 Stage x 1500mm x \u00d8400mm + Scalper Drum'
    ],
    RED600: [
      '1 Start x 3 Stage x 1500mm x \u00d8600mm',
      '1 Start x 2 Stage x 1500mm x \u00d8600mm + Scalper Drum',
      '1 Start x 2 Stage x 1500mm x \u00d8600mm',
      '1 Start x 1 Stage x 1500mm x \u00d8600mm + Scalper Drum',
      '1 Start x 1 Stage x 1500mm x \u00d8600mm',
      '1 Start x 1 Stage x 1500mm x \u00d8600mm (Scalper)',
      '1 Start x 3 Stage x 1000mm x \u00d8600mm',
      '1 Start x 2 Stage x 1000mm x \u00d8600mm + Scalper Drum',
      '1 Start x 2 Stage x 1000mm x \u00d8600mm',
      '1 Start x 1 Stage x 1000mm x \u00d8600mm + Scalper Drum',
      '1 Start x 1 Stage x 1000mm x \u00d8600mm',
      '1 Start x 1 Stage x 1000mm x \u00d8600mm (Scalper)'
    ],
    HTR270: [
      '2 Start x 3 Stage x 1800mm x \u00d8270mm',
      '2 Start x 2 Stage x 1800mm x \u00d8270mm',
      '1 Start x 3 Stage x 1800mm x \u00d8270mm',
      '1 Start x 2 Stage x 1800mm x \u00d8270mm'
    ],
    HTR400: [
      '1 Start x 3 Stage x 2000mm x \u00d8400mm',
      '1 Start x 2 Stage x 2000mm x \u00d8400mm',
      '2 Start x 3 Stage x 2000mm x \u00d8400mm',
      '4 Start x 1 Stage x 2000mm x \u00d8400mm',
      '2 Start x 2 Stage x 2000mm x \u00d8400mm'
    ],
    ESP: [
      '2 Start x 5 Stage',
      '1 Start x 5 Stage'
    ],
    WHIMS: [
      '16 Pole x 120mm - Mags / Non-Mags',
      '16 Pole x 120mm- Mags / Mids / Non-Mags',
      '16 Pole x 200mm - Mags / Non-Mags',
      '16 Pole x 200mm - Mags / Mids / Non-Mags',
      '16 Pole x 68mm - Mags / Non-Mags',
      '16 Pole x 68mm - Mags / Mids / Non-Mags'
    ],
    RER: [
      '1 Start x 3 Stage x 1000mm x \u00d8100mm',
      '1 Start x 2 Stage x 1000mm x \u00d8100mm',
      '1 Start x 3 Stage x 1500mm x \u00d8100mm',
      '1 Start x 1 Stage x 1000mm x \u00d8100mm',
      '1 Start x 1 Stage x 1500mm x \u00d8100mm',
      '1 Start x 2 Stage x 1500mm x \u00d8100mm'
    ],
    IRM: [
      '2 Start x 2 Stage x 760mm x \u00d8133mm + Scalper Roll',
      '2 Start x 2 Stage x 760mm x \u00d8133mm',
      '2 Start x 2 Stage x 760mm x \u00d8133mm - Direct Drive',
      '2 Start x 2 Stage x 1000mm x \u00d8160mm',
      '2 Start x 2 Stage x 1000mm x \u00d8160mm - Direct Drive',
      '2 Start x 2 Stage x 1000mm x \u00d8160mm + Scalper Roll'
    ],
    RTF: [
      '105 tph - Table Diameter 1600mm',
      '12 tph - Table Diameter 1000mm',
      '35 tph - Table Diameter 1200mm',
      '50 tph - Table Diameter 1400mm'
    ],
    UCC: [
      'Square 1200mm x 1200mm',
      'Square 900mm x 900mm',
      'Square 1800mm x 1800mm',
      'Square 600mm x 600mm',
      'Retangular 1200mm x 2400mm'
    ],
    
  };

function normalize(val) {
    return (val || '').trim().toLowerCase();
  }

  function getConfigsForModel(selectedModel) {
    const configs = ALL_MODELS
      .filter(m => normalize(m.model_type) === normalize(selectedModel))
      .map(m => ({
        value: m.config,
        label: m.config_description || m.config
      }))
      .filter(m => !!m.value);

    const uniqueConfigs = Array.from(
      new Map(configs.map(cfg => [cfg.value, cfg])).values()
    );

    return uniqueConfigs.length > 0
      ? uniqueConfigs
      : (DEFAULT_CONFIGS[selectedModel] || []).map(cfg => ({ value: cfg, label: cfg }));
  }

  function populateModelDetails(model, configValue, variant1 = '', variant2 = '', variant3 = '', variant4 = '') {
    console.log('🧪 Trying to match:', {
      model,
      configValue,
      variant1,
      variant2,
      variant3,
      variant4
    });

    const matches = ALL_MODELS.filter(item => {
      const configMatches =
        normalize(item.config || '').includes(normalize(configValue)) ||
        normalize(item.config_description || '').includes(normalize(configValue));

      const matchResult =
        normalize(item.model_type) === normalize(model) &&
        configMatches &&
        (variant1 === '' || normalize(item.variant1) === normalize(variant1)) &&
        (variant2 === '' || normalize(item.variant2) === normalize(variant2)) &&
        (variant3 === '' || normalize(item.variant3) === normalize(variant3)) &&
        (variant4 === '' || normalize(item.variant4) === normalize(variant4));

      if (matchResult) {
        console.log('✅ Match found candidate:', item);
      }

      return matchResult;
    });

    if (matches.length > 0) {
      const match = matches[0];
      document.getElementById('modelCodeInput').value = match.model_code || '';
      document.getElementById('modelDescInput').value = match.model_description || '';
      document.getElementById('controlPanelCodeInput').value = match.control_panel_code || '';
      document.getElementById('controlPanelDescInput').value = match.control_panel_description || '';
      document.getElementById('addItemBtn').disabled = false;
      console.log('✅ Final matched config:', match.config || match.config_description);
    } else {
      console.warn('❌ No match found in ALL_MODELS for:', model, configValue);
    }
  }

  modelTypeSelect.addEventListener('change', function () {
    const selectedModel = this.value;
    console.log("Model type selected:", selectedModel);

    resetDropdown(configSelect);
    updateVariantLabels(selectedModel);

    document.getElementById('modelCodeInput').value = '';
    document.getElementById('modelDescInput').value = '';
    document.getElementById('controlPanelCodeInput').value = '';
    document.getElementById('controlPanelDescInput').value = '';
    document.getElementById('addItemBtn').disabled = true;

    if (selectedModel) {
      configSelect.disabled = false;
      const uniqueConfigs = getConfigsForModel(selectedModel);

      console.log(`Found ${uniqueConfigs.length} configurations for ${selectedModel}`);

      uniqueConfigs.forEach(cfg => {
        const option = document.createElement('option');
        option.value = cfg.value;
        option.textContent = cfg.label;
        configSelect.appendChild(option);
      });  
    }
});

    // Handle configuration selection
configSelect.addEventListener('change', function () {
  const selectedModel = modelTypeSelect.value;
  const selectedConfig = this.value;

  // Reset and disable variant dropdowns with custom labels
  resetDropdown(variant1Select, variant1Label.textContent);
  resetDropdown(variant2Select, variant2Label.textContent);
  resetDropdown(variant3Select, variant3Label.textContent);
  resetDropdown(variant4Select, variant4Label.textContent);

  // Clear auto-populated fields
  document.getElementById('modelCodeInput').value = '';
  document.getElementById('modelDescInput').value = '';
  document.getElementById('controlPanelCodeInput').value = '';
  document.getElementById('controlPanelDescInput').value = '';
  document.getElementById('addItemBtn').disabled = true;

  if (selectedConfig) {
    // Enable and populate variant1 dropdown if options exist
    const v1Options = VARIANT_DATA.options.variant1[selectedModel];
    if (v1Options && v1Options.length > 0) {
      variant1Select.disabled = false;

      v1Options.forEach(variant => {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        variant1Select.appendChild(option);
      });

      console.log(`Populated ${variant1Label.textContent} dropdown for ${selectedModel} with:`, v1Options);
    }

    // If there are no variant1 options or only one, trigger population directly
    if (!v1Options || v1Options.length <= 1) {
      const v1 = variant1Select.disabled ? '' : variant1Select.value;
      const v2 = variant2Select.disabled ? '' : variant2Select.value;
      const v3 = variant3Select.disabled ? '' : variant3Select.value;
      const v4 = variant4Select.disabled ? '' : variant4Select.value;

      populateModelDetails(selectedModel, selectedConfig, v1, v2, v3, v4);
    }
  }
});
    
    // Handle variant1 selection
    variant1Select.addEventListener('change', function() {
        const selectedModel = modelTypeSelect.value;
        const selectedConfig = configSelect.value;
        const selectedVariant1 = this.value;
        
        // Reset and disable dependent dropdowns
        resetDropdown(variant2Select, variant2Label.textContent);
        resetDropdown(variant3Select, variant3Label.textContent);
        resetDropdown(variant4Select, variant4Label.textContent);
        
        // Clear auto-populated fields
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';
        
        // Disable add item button
        document.getElementById('addItemBtn').disabled = true;
        
        if (selectedVariant1) {
            // Enable variant2 dropdown if options exist
            if (VARIANT_DATA.options.variant2[selectedModel] && VARIANT_DATA.options.variant2[selectedModel].length > 1) {
                variant2Select.disabled = false;
                
                // Populate variant2 options
                VARIANT_DATA.options.variant2[selectedModel].forEach(variant => {
                    // Skip the first item which is the model name
                    if (variant !== selectedModel) {
                        const option = document.createElement('option');
                        option.value = variant;
                        option.textContent = variant;
                        variant2Select.appendChild(option);
                    }
                });
                
                console.log(`Populated ${variant2Label.textContent} dropdown for ${selectedModel} with:`, 
                    VARIANT_DATA.options.variant2[selectedModel].filter(v => v !== selectedModel));
            } else {
                // If no variant2, check if variant3 exists
                if (VARIANT_DATA.options.variant3[selectedModel] && VARIANT_DATA.options.variant3[selectedModel].length > 1) {
                    variant3Select.disabled = false;
                    
                    // Populate variant3 options
                    VARIANT_DATA.options.variant3[selectedModel].forEach(variant => {
                        // Skip the first item which is the model name
                        if (variant !== selectedModel) {
                            const option = document.createElement('option');
                            option.value = variant;
                            option.textContent = variant;
                            variant3Select.appendChild(option);
                        }
                    });
                    
                    console.log(`Populated ${variant3Label.textContent} dropdown for ${selectedModel} with:`, 
                        VARIANT_DATA.options.variant3[selectedModel].filter(v => v !== selectedModel));
                } else {
                    // If no variant2, variant3 or Variant4, populate model details
                    populateModelDetails(selectedModel, selectedConfig, selectedVariant1);
                }
            }
        }
    });
    
    // Handle variant2 selection
    variant2Select.addEventListener('change', function() {
        const selectedModel = modelTypeSelect.value;
        const selectedConfig = configSelect.value;
        const selectedVariant1 = variant1Select.value;
        const selectedVariant2 = this.value;
        
        // Reset and disable dependent dropdowns
        resetDropdown(variant3Select, variant3Label.textContent);
        resetDropdown(variant4Select, variant4Label.textContent);
        
        // Clear auto-populated fields
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';
        
        // Disable add item button
        document.getElementById('addItemBtn').disabled = true;
        
        if (selectedVariant2) {
            // Enable variant3 dropdown if options exist
            if (VARIANT_DATA.options.variant3[selectedModel] && VARIANT_DATA.options.variant3[selectedModel].length > 1) {
                variant3Select.disabled = false;
                
                // Populate variant3 options
                VARIANT_DATA.options.variant3[selectedModel].forEach(variant => {
                    // Skip the first item which is the model name
                    if (variant !== selectedModel) {
                        const option = document.createElement('option');
                        option.value = variant;
                        option.textContent = variant;
                        variant3Select.appendChild(option);
                    }
                });
                
                console.log(`Populated ${variant3Label.textContent} dropdown for ${selectedModel} with:`, 
                    VARIANT_DATA.options.variant3[selectedModel].filter(v => v !== selectedModel));
            } else {
                // If no variant3 or Variant4, populate model details
                populateModelDetails(selectedModel, selectedConfig, selectedVariant1, selectedVariant2);
            }
        }
    });
    
    // Handle variant3 selection
    variant3Select.addEventListener('change', function() {
        const selectedModel = modelTypeSelect.value;
        const selectedConfig = configSelect.value;
        const selectedVariant1 = variant1Select.value;
        const selectedVariant2 = variant2Select.value;
        const selectedVariant3 = this.value;

        // Reset and disable dependent dropdowns
        resetDropdown(variant4Select, variant4Label.textContent);
        
        // Clear auto-populated fields
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';
        
        // Disable add item button
        document.getElementById('addItemBtn').disabled = true;
        
        if (selectedVariant3) {
            // Enable variant4 dropdown if options exist
            if (VARIANT_DATA.options.variant4[selectedModel] && VARIANT_DATA.options.variant4[selectedModel].length > 1) {
                variant4Select.disabled = false;
                
                // Populate variant4 options
                VARIANT_DATA.options.variant4[selectedModel].forEach(variant => {
                    // Skip the first item which is the model name
                    if (variant !== selectedModel) {
                        const option = document.createElement('option');
                        option.value = variant;
                        option.textContent = variant;
                        variant4Select.appendChild(option);
                    }
                });
                
                console.log(`Populated ${variant4Label.textContent} dropdown for ${selectedModel} with:`, 
                    VARIANT_DATA.options.variant4[selectedModel].filter(v => v !== selectedModel));
            } else {
                // If no Variant4, populate model details
                populateModelDetails(selectedModel, selectedConfig, selectedVariant1, selectedVariant2, selectedVariant3);
            }
        }
    });

        // Handle variant4 selection
    variant4Select.addEventListener('change', function() {
        const selectedModel = modelTypeSelect.value;
        const selectedConfig = configSelect.value;
        const selectedVariant1 = variant1Select.value;
        const selectedVariant2 = variant2Select.value;
        const selectedVariant3 = variant3Select.value;
        const selectedVariant4 = this.value;

        // Clear auto-populated fields
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';

        // Disable add item button
        document.getElementById('addItemBtn').disabled = true;

        if (selectedVariant4) {
            // Populate model details with all 4 variants
            populateModelDetails(selectedModel, selectedConfig, selectedVariant1, selectedVariant2, selectedVariant3, selectedVariant4);
        }
    });
    
    // Add item to tender
    document.getElementById('addItemBtn').addEventListener('click', function() {
        const modelCode = document.getElementById('modelCodeInput').value;
        const modelDesc = document.getElementById('modelDescInput').value;
        const controlPanelCode = document.getElementById('controlPanelCodeInput').value;
        const controlPanelDesc = document.getElementById('controlPanelDescInput').value;
        const quantity = document.getElementById('quantityInput').value;
        
        if (modelCode && modelDesc && quantity) {
            addItemToTable(modelCode, modelDesc, controlPanelCode, controlPanelDesc, quantity);
            
            // Reset selection fields but keep header info
            resetSelectionFields();
        }
    });
    
    // Reset form button
    document.getElementById('resetFormBtn').addEventListener('click', function() {
        resetSelectionFields();
    });
    
    // Clear all items button
    document.getElementById('clearItemsBtn').addEventListener('click', function() {
        clearAllItems();
    });
    
    // Export to PDF button
    document.getElementById('exportPdfBtn').addEventListener('click', function() {
        exportToPDF();
    });
    
    // Helper function to reset a dropdown
    function resetDropdown(dropdown, customLabel = null) {
        dropdown.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        
        if (customLabel) {
            defaultOption.textContent = `Select ${customLabel}`;
        } else {
            defaultOption.textContent = `Select ${dropdown.id.replace('Select', '')}`;
        }
        
        dropdown.appendChild(defaultOption);
        dropdown.disabled = true;
    }
    
    // Helper function to update variant labels based on selected model
    function updateVariantLabels(selectedModel) {
        console.log("Updating variant labels for model:", selectedModel);
        
        // Get parent elements for each variant field
        const variant1Container = document.getElementById('variant1Container');
        const variant2Container = document.getElementById('variant2Container');
        const variant3Container = document.getElementById('variant3Container');
        const variant4Container = document.getElementById('variant4Container');
        
        
        // Check if variant1 has options
        if (VARIANT_DATA.options.variant1[selectedModel] && 
            VARIANT_DATA.options.variant1[selectedModel].length > 1) {
            // Show variant1 field
            variant1Container.style.display = 'block';
            
            // Update variant1 label
            if (VARIANT_DATA.titles.variant1[selectedModel]) {
                variant1Label.textContent = VARIANT_DATA.titles.variant1[selectedModel];
                console.log("Set variant1 label to:", VARIANT_DATA.titles.variant1[selectedModel]);
            } else {
                variant1Label.textContent = 'Variant 1';
                console.log("Set variant1 label to default: Variant 1");
            }
            
            // Update dropdown placeholder
            resetDropdown(variant1Select, variant1Label.textContent);
        } else {
            // Hide variant1 field if no options
            variant1Container.style.display = 'none';
            console.log("Hiding variant1 field - no options available");
        }
        
        // Check if variant2 has options
        if (VARIANT_DATA.options.variant2[selectedModel] && 
            VARIANT_DATA.options.variant2[selectedModel].length > 1) {
            // Show variant2 field
            variant2Container.style.display = 'block';
            
            // Update variant2 label
            if (VARIANT_DATA.titles.variant2[selectedModel]) {
                variant2Label.textContent = VARIANT_DATA.titles.variant2[selectedModel];
                console.log("Set variant2 label to:", VARIANT_DATA.titles.variant2[selectedModel]);
            } else {
                variant2Label.textContent = 'Variant 2';
                console.log("Set variant2 label to default: Variant 2");
            }
            
            // Update dropdown placeholder
            resetDropdown(variant2Select, variant2Label.textContent);
        } else {
            // Hide variant2 field if no options
            variant2Container.style.display = 'none';
            console.log("Hiding variant2 field - no options available");
        }
        
        // Check if variant3 has options
        if (VARIANT_DATA.options.variant3[selectedModel] && 
            VARIANT_DATA.options.variant3[selectedModel].length > 1) {
            // Show variant3 field
            variant3Container.style.display = 'block';
            
            // Update variant3 label
            if (VARIANT_DATA.titles.variant3[selectedModel]) {
                variant3Label.textContent = VARIANT_DATA.titles.variant3[selectedModel];
                console.log("Set variant3 label to:", VARIANT_DATA.titles.variant3[selectedModel]);
            } else {
                variant3Label.textContent = 'Variant 3';
                console.log("Set variant3 label to default: Variant 3");
            }
            
            // Update dropdown placeholder
            resetDropdown(variant3Select, variant3Label.textContent);
        } else {
            // Hide variant3 field if no options
            variant3Container.style.display = 'none';
            console.log("Hiding variant3 field - no options available");
        }

        // Check if variant4 has options
        if (VARIANT_DATA.options.variant4[selectedModel] && 
            VARIANT_DATA.options.variant4[selectedModel].length > 1) {
            // Show variant4 field
            variant4Container.style.display = 'block';
            
            // Update variant4 label
            if (VARIANT_DATA.titles.variant4[selectedModel]) {
                variant4Label.textContent = VARIANT_DATA.titles.variant4[selectedModel];
                console.log("Set variant4 label to:", VARIANT_DATA.titles.variant4[selectedModel]);
            } else {
                variant4Label.textContent = 'Variant 4';
                console.log("Set variant4 label to default: Variant 4");
            }
            
            // Update dropdown placeholder
            resetDropdown(variant4Select, variant4Label.textContent);
        } else {
            // Hide variant4 field if no options
            variant4Container.style.display = 'none';
            console.log("Hiding variant3 field - no options available");
        }
    }
    
    // Helper function to populate model details
    function populateModelDetails(model, config, variant1 = '', variant2 = '', variant3 = '', variant4 = '') {
    console.log("🔍 Looking up model:", { model, config, variant1, variant2, variant3, variant4 });

    const normalize = val => (val || '').trim().toLowerCase();

    const matches = ALL_MODELS.filter(item => {
        return normalize(item.model_type) === normalize(model) &&
               normalize(item.config) === normalize(config) &&
               (variant1 === '' || normalize(item.variant1) === normalize(variant1)) &&
               (variant2 === '' || normalize(item.variant2) === normalize(variant2)) &&
               (variant3 === '' || normalize(item.variant3) === normalize(variant3)) &&
               (variant4 === '' || normalize(item.variant4) === normalize(variant4));
    });

    console.log(`✅ Matches found: ${matches.length}`);

    if (matches.length > 0) {
        const result = matches[0];
        document.getElementById('modelCodeInput').value = result.model_code || '';
        document.getElementById('modelDescInput').value = result.model_description || '';
        document.getElementById('controlPanelCodeInput').value = result.control_panel_code || '';
        document.getElementById('controlPanelDescInput').value = result.control_panel_description || '';
        document.getElementById('addItemBtn').disabled = false;
        console.log("✨ Fields populated with:", result);
    } else {
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';
        document.getElementById('addItemBtn').disabled = true;
        console.warn("❌ No exact match found in ALL_MODELS.");
    }
}

    // Helper function to add item to table
    function addItemToTable(modelCode, modelDesc, controlPanelCode, controlPanelDesc, quantity) {
        const tableBody = document.getElementById('itemsTableBody');
        
        // Remove "no items" row if present
        const noItemsRow = document.getElementById('noItemsRow');
        if (noItemsRow) {
            noItemsRow.remove();
        }
        
        // Create new row
        const newRow = document.createElement('tr');
        
        // Calculate item number (count existing rows + 1)
        const itemNumber = tableBody.rows.length + 1;
        
        // Create cells
        newRow.innerHTML = `
            <td>${itemNumber}</td>
            <td>${modelCode}</td>
            <td>${modelDesc}</td>
            <td>${controlPanelCode}</td>
            <td>${controlPanelDesc}</td>
            <td class="qty-cell">${quantity}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-sm action-icon edit-icon" title="Edit Quantity">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn btn-sm action-icon delete-icon" title="Remove Item">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        `;
        
        // Add event listeners to action icons
        const deleteIcon = newRow.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
            removeItem(newRow);
        });
        
        const editIcon = newRow.querySelector('.edit-icon');
        editIcon.addEventListener('click', function() {
            editQuantity(newRow);
        });
        
        // Add row to table
        tableBody.appendChild(newRow);
    }
    
    // Helper function to remove item
    function removeItem(row) {
        row.remove();
        
        // Renumber remaining rows
        const tableBody = document.getElementById('itemsTableBody');
        const rows = tableBody.rows;
        
        for (let i = 0; i < rows.length; i++) {
            rows[i].cells[0].textContent = i + 1;
        }
        
        // Add "no items" row if table is empty
        if (rows.length === 0) {
            const noItemsRow = document.createElement('tr');
            noItemsRow.id = 'noItemsRow';
            noItemsRow.innerHTML = '<td colspan="7" class="no-items-message">No items added to tender yet</td>';
            tableBody.appendChild(noItemsRow);
        }
    }
    
    // Helper function to edit quantity
    function editQuantity(row) {
        const qtyCell = row.querySelector('.qty-cell');
        const currentQty = qtyCell.textContent;
        
        const newQty = prompt('Enter new quantity:', currentQty);
        
        if (newQty !== null && !isNaN(newQty) && parseInt(newQty) > 0) {
            qtyCell.textContent = parseInt(newQty);
        }
    }
    
    // Helper function to reset selection fields
    function resetSelectionFields() {
        // Reset dropdowns
        resetDropdown(modelTypeSelect);
        resetDropdown(configSelect);
        resetDropdown(variant1Select);
        resetDropdown(variant2Select);
        resetDropdown(variant3Select);
        resetDropdown(variant4Select);
        
        // Reset variant labels
        variant1Label.textContent = 'Variant 1';
        variant2Label.textContent = 'Variant 2';
        variant3Label.textContent = 'Variant 3';
        variant4Label.textContent = 'Variant 4';
        
        // Clear auto-populated fields
        document.getElementById('modelCodeInput').value = '';
        document.getElementById('modelDescInput').value = '';
        document.getElementById('controlPanelCodeInput').value = '';
        document.getElementById('controlPanelDescInput').value = '';
        
        // Reset quantity
        document.getElementById('quantityInput').value = '1';
        
        // Disable add item button
        document.getElementById('addItemBtn').disabled = true;
        
        // Re-populate model types
        modelTypes.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelTypeSelect.appendChild(option);
        });
        
        // Enable model type dropdown
        modelTypeSelect.disabled = false;
    }
    
    // Helper function to clear all items
    function clearAllItems() {
        const tableBody = document.getElementById('itemsTableBody');
        tableBody.innerHTML = '';
        
        // Add "no items" row
        const noItemsRow = document.createElement('tr');
        noItemsRow.id = 'noItemsRow';
        noItemsRow.innerHTML = '<td colspan="7" class="no-items-message">No items added to tender yet</td>';
        tableBody.appendChild(noItemsRow);
    }
    
    // Helper function to PDF Export
            function exportToPDF() {
        const tableBody = document.getElementById('itemsTableBody');
        const noItemsRow = document.getElementById('noItemsRow');
        if (noItemsRow && noItemsRow.style.display !== 'none') {
            alert('No items to export.');
            return;
        }

        const customer = document.getElementById('customerInput').value;
        const site = document.getElementById('siteInput').value;
        const mtQuote = document.getElementById('mtQuoteInput').value;
        const requestedBy = document.getElementById('requestedByInput').value;
        const date = document.getElementById('dateInput').value;
        const comments = document.getElementById('commentsInput').value;

        const filename = `Tender_${customer}_${date.replace(/-/g, '')}.pdf`;
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        const pageWidth = doc.internal.pageSize.getWidth();

        const logoImg = new Image();
        logoImg.src = 'images/processed/MTball_transparent.png'; // ✅ RELATIVE path only once!

        // 🟢 Don't add logo here — just preload image
        logoImg.onload = function () {
            finalizePDF(); // Go to final layout once logo is ready
        };

        logoImg.onerror = function () {
            console.warn('⚠️ Logo failed to load. Continuing without logo.');
            finalizePDF(); // Proceed anyway
        };

        function finalizePDF() {
            // ✅ 1. Draw header background
            doc.setFillColor(45, 45, 45);
            doc.rect(0, 5, pageWidth, 20, 'F');

            // ✅ 2. Add logo ONCE here
            if (logoImg.complete) {
            doc.addImage(logoImg, 'PNG', 10, 8, 60, 15); // ✅ Position + size
            }

            // ✅ 3. Add white title
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(18);
            doc.setFont(undefined, 'bold');
            doc.text('Tender Enquiry', pageWidth / 2, 17, { align: 'center' });

            // ✅ 4. Reset text color to black
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            doc.setFont(undefined, 'normal');

            // ✅ 5. Add header fields
            doc.text(`Customer: ${customer}`, 20, 32);
            doc.text(`Site: ${site}`, 20, 40);
            doc.text(`MT Quote: ${mtQuote}`, 20, 48);
            doc.text(`Requested By: ${requestedBy}`, 150, 32);
            doc.text(`Date: ${date}`, 150, 40);

            // ✅ 6. Build table data
            const tableData = [];
            const rows = tableBody.rows;
            for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].cells;
            tableData.push([
                cells[0].textContent,
                cells[1].textContent,
                cells[2].textContent,
                cells[3].textContent,
                cells[4].textContent,
                cells[5].textContent
            ]);
            }

            // ✅ 7. Draw table
            doc.autoTable({
            head: [['#', 'Model Code', 'Model Description', 'Control Panel Code', 'Control Panel Description', 'Qty']],
            body: tableData,
            startY: 52,
            styles: { fontSize: 10, cellPadding: 3 },
            headStyles: { fillColor: [255, 90, 69], textColor: [255, 255, 255], fontStyle: 'bold' },
            columnStyles: { 0: { cellWidth: 10 }, 5: { cellWidth: 15 } }
            });

            // ✅ 8. Add comments if any
            if (comments) {
            const finalY = doc.lastAutoTable.finalY || 120;
            doc.setFontSize(12);
            doc.text('Comments:', 20, finalY + 15);
            doc.setFontSize(10);
            doc.text(doc.splitTextToSize(comments, 250), 20, finalY + 25);
            }

            // ✅ 9. Footer
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.text(`Generated on ${new Date().toLocaleString()} - Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.height - 10, { align: 'center' });
            }

            // ✅ 10. Save
            doc.save(filename);
        }
        }


  function tryPopulateIfReady() {
    const selectedModel = modelTypeSelect.value;
    const selectedConfig = configSelect.value;
    const v1 = variant1Select.disabled ? '' : variant1Select.value;
    const v2 = variant2Select.disabled ? '' : variant2Select.value;
    const v3 = variant3Select.disabled ? '' : variant3Select.value;
    const v4 = variant4Select.disabled ? '' : variant4Select.value;

    if (selectedModel && selectedConfig) {
      populateModelDetails(selectedModel, selectedConfig, v1, v2, v3, v4);
    }
  }

  variant1Select.addEventListener('change', tryPopulateIfReady);
  variant2Select.addEventListener('change', tryPopulateIfReady);
  variant3Select.addEventListener('change', tryPopulateIfReady);
  variant4Select.addEventListener('change', tryPopulateIfReady);

});