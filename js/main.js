
// Main JavaScript for BD Team Tender Enquiry Interface 
document.addEventListener('DOMContentLoaded', function () {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('dateInput').value = today;

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

  // Centralized fallback configurations
  const DEFAULT_CONFIGS = {
    RED400: [
      '1 Start x 2 Stage x 1000mm x Ø400mm',
      '1 Start x 1 Stage x 1000mm x Ø400mm + Scalper Drum',
      '1 Start x 1 Stage x 1500mm x Ø400mm',
      '1 Start x 1 Stage x 1500mm x Ø400mm (Scalper)',
      '1 Start x 1 Stage x 1000mm x Ø400mm',
      '1 Start x 1 Stage x 1000mm x Ø400mm (Scalper)',
      '1 Start x 3 Stage x 1000mm x Ø400mm',
      '1 Start x 2 Stage x 1000mm x Ø400mm + Scalper Drum',
      '1 Start x 2 Stage x 1500mm x Ø400mm',
      '1 Start x 1 Stage x 1500mm x Ø400mm + Scalper Drum',
      '1 Start x 3 Stage x 1500mm x Ø400mm',
      '1 Start x 2 Stage x 1500mm x Ø400mm + Scalper Drum'
    ],
    RED600: [
      '1 Start x 3 Stage x 1500mm x Ø600mm',
      '1 Start x 2 Stage x 1500mm x Ø600mm + Scalper Drum',
      '1 Start x 2 Stage x 1500mm x Ø600mm',
      '1 Start x 1 Stage x 1500mm x Ø600mm + Scalper Drum',
      '1 Start x 1 Stage x 1500mm x Ø600mm',
      '1 Start x 1 Stage x 1500mm x Ø600mm (Scalper)',
      '1 Start x 3 Stage x 1000mm x Ø600mm',
      '1 Start x 2 Stage x 1000mm x Ø600mm + Scalper Drum',
      '1 Start x 2 Stage x 1000mm x Ø600mm',
      '1 Start x 1 Stage x 1000mm x Ø600mm + Scalper Drum',
      '1 Start x 1 Stage x 1000mm x Ø600mm',
      '1 Start x 1 Stage x 1000mm x Ø600mm (Scalper)'
    ],
    HTR270: [
      '2 Start x 3 Stage x 1800mm x Ø270mm',
      '2 Start x 2 Stage x 1800mm x Ø270mm',
      '1 Start x 3 Stage x 1800mm x Ø270mm',
      '1 Start x 2 Stage x 1800mm x Ø270mm'
    ],
    HTR400: [
      '1 Start x 3 Stage x 2000mm x Ø400mm',
      '1 Start x 2 Stage x 2000mm x Ø400mm',
      '2 Start x 3 Stage x 2000mm x Ø400mm',
      '4 Start x 1 Stage x 2000mm x Ø400mm',
      '2 Start x 2 Stage x 2000mm x Ø400mm'
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
      '1 Start x 3 Stage x 1000mm x Ø100mm',
      '1 Start x 2 Stage x 1000mm x Ø100mm',
      '1 Start x 3 Stage x 1500mm x Ø100mm',
      '1 Start x 1 Stage x 1000mm x Ø100mm',
      '1 Start x 1 Stage x 1500mm x Ø100mm',
      '1 Start x 2 Stage x 1500mm x Ø100mm'
    ],
    IRM: [
      '2 Start x 2 Stage x 760mm x Ø133mm + Scalper Roll',
      '2 Start x 2 Stage x 760mm x Ø133mm',
      '2 Start x 2 Stage x 760mm x Ø133mm - Direct Drive',
      '2 Start x 2 Stage x 1000mm x Ø160mm',
      '2 Start x 2 Stage x 1000mm x Ø160mm - Direct Drive',
      '2 Start x 2 Stage x 1000mm x Ø160mm + Scalper Roll'
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
    ]
  };
    

function getConfigsForModel(selectedModel) {
  console.log(`🔍 Getting configs for model: "${selectedModel}"`);

  const normalize = val => {
    if (val === null || val === undefined) return '';
    return val.toString()
      .replace(/[\u00F8\u00D8]/g, '0')  // ø is U+00F8, Ø is U+00D8
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim()               // Remove leading/trailing spaces
      .toLowerCase();       // Convert to lowercase
  };
  
  // First check if ALL_MODELS exists and has data
  if (typeof ALL_MODELS !== 'undefined' && ALL_MODELS && ALL_MODELS.length > 0) {
    console.log(`📊 Using ALL_MODELS data (${ALL_MODELS.length} entries)`);
    
    // DEBUG: Show what we're comparing against
    const availableModels = [...new Set(ALL_MODELS.map(m => m.model_type))].sort();
    console.log('🔍 Available model_types:', availableModels);
    
    // DEBUG: Show normalized versions too
    const normalizedAvailable = [...new Set(ALL_MODELS.map(m => normalize(m.model_type)))].sort();
    console.log('🔍 Normalized available model_types:', normalizedAvailable);
    
    const normalizedSelected = normalize(selectedModel);
    console.log(`🔍 Normalized selected: "${normalizedSelected}"`);
    
    const configs = ALL_MODELS
      .filter(m => {
        const normalizedModelType = normalize(m.model_type);
        const matches = normalizedModelType === normalizedSelected;
        
        // DEBUG: Log close matches
        if (!matches && m.model_type && m.model_type.toLowerCase().includes(selectedModel.toLowerCase())) {
          console.log(`🔍 Close match found: "${m.model_type}" vs "${selectedModel}"`);
        }
        
        return matches;
      })
      .map(m => {
        // DEBUG: Show original vs normalized config
        console.log(`🔧 Original config: "${m.config}"`);
        console.log(`🔧 Normalized config: "${normalize(m.config)}"`);
        
        return {
          value: m.config,
          label: m.config_description || m.config
        };
      })
      .filter(cfg => !!cfg.value);

    const uniqueConfigs = Array.from(new Map(configs.map(cfg => [cfg.value, cfg])).values())
      .sort((a, b) => a.value.localeCompare(b.value)); // Sort configurations alphabetically
    
    console.log(`✅ Found ${uniqueConfigs.length} configs from ALL_MODELS for ${selectedModel}`);
    
    // DEBUG: Show actual configs found (IMPORTANT FOR DEBUGGING)
    console.log('🔍 Actual configs found:', uniqueConfigs.map(cfg => cfg.value));
    
    // DEBUG: Show what configs were found
    if (uniqueConfigs.length === 0) {
      console.log(`❌ No configs found. Available configs for similar models:`);
      const similarModels = ALL_MODELS.filter(m => 
        m.model_type && m.model_type.toLowerCase().includes(selectedModel.substring(0, 3).toLowerCase())
      );
      similarModels.forEach(m => {
        console.log(`  - Model: "${m.model_type}", Config: "${m.config}"`);
      });
    } else {
      // ADDITIONAL DEBUG: Show scalper-specific configs
      const scalperConfigs = uniqueConfigs.filter(cfg => 
        cfg.value && cfg.value.toLowerCase().includes('scalper')
      );
      if (scalperConfigs.length > 0) {
        console.log(`🎯 Scalper configs found: ${scalperConfigs.length}`);
        scalperConfigs.forEach(cfg => {
          console.log(`  - "${cfg.value}"`);
        });
      }
    }
    
    // If no configs found in ALL_MODELS, try DEFAULT_CONFIGS as fallback
    if (uniqueConfigs.length === 0) {
      console.log(`⚠️ No configs in ALL_MODELS, trying DEFAULT_CONFIGS for ${selectedModel}`);
      const defaultConfigs = DEFAULT_CONFIGS[selectedModel] || [];
      console.log(`📋 Found ${defaultConfigs.length} configs in DEFAULT_CONFIGS`);
      
      return defaultConfigs
        .sort() // Sort the default configs array
        .map(config => ({
          value: config,
          label: config
        }));
    }
    
    return uniqueConfigs;
  } else {
    // Fallback to DEFAULT_CONFIGS
    console.log(`📋 ALL_MODELS not available, using DEFAULT_CONFIGS for ${selectedModel}`);
    const configs = DEFAULT_CONFIGS[selectedModel] || [];

    console.log(`✅ Found ${configs.length} configs from DEFAULT_CONFIGS for ${selectedModel}:`, configs);
    
    return configs
      .sort() // Sort before mapping
      .map(config => ({
        value: config,
        label: config
      }));
  }
}

function clearModelDetails() {
  document.getElementById('modelCodeInput').value = '';
  document.getElementById('modelDescInput').value = '';
  document.getElementById('controlPanelCodeInput').value = '';
  document.getElementById('controlPanelDescInput').value = '';
  document.getElementById('addItemBtn').disabled = true;
}

function tryPopulateIfReady() {
  const model = modelTypeSelect.value;
  const config = configSelect.value;

  const v1 = variant1Select.disabled ? '' : variant1Select.value;
  const v2 = variant2Select.disabled ? '' : variant2Select.value;
  const v3 = variant3Select.disabled ? '' : variant3Select.value;
  const v4 = variant4Select.disabled ? '' : variant4Select.value;

  // Check if ALL required dropdowns are selected
  const allRequiredSelected = model && config && 
    (variant1Select.disabled || v1) && 
    (variant2Select.disabled || v2) && 
    (variant3Select.disabled || v3) && 
    (variant4Select.disabled || v4);

  if (allRequiredSelected) {
    populateModelDetails(model, config, v1, v2, v3, v4);
  } else {
    // Clear details if not all dropdowns are selected
    clearModelDetails();
  }
}

function populateModelDetails(model, configValue, variant1 = '', variant2 = '', variant3 = '', variant4 = '') {
  console.log('🧪 Trying to match:', { model, configValue, variant1, variant2, variant3, variant4 });

  // ADD SAFETY CHECK HERE
  if (typeof ALL_MODELS === 'undefined' || !ALL_MODELS || ALL_MODELS.length === 0) {
    console.warn('❌ ALL_MODELS not available for matching');
    return;
  }

  const normalize = val => {
    if (val === null || val === undefined) return '';
    return val.toString().trim().toLowerCase()
      .replace(/ø/g, '0')  // Replace diameter symbol with zero
      .replace(/\s+/g, ' '); // Replace multiple spaces with single space
  };

  // Enhanced variant matching with flexible empty handling
  const matchVariant = (itemVariant, searchVariant) => {
    const itemVal = normalize(itemVariant);
    const searchVal = normalize(searchVariant);
    
    // If search variant is empty, it matches anything
    if (searchVal === '') return true;
    
    // If item variant is empty but we're searching for something specific,
    // allow it to match (flexible matching for incomplete data)
    if (itemVal === '' && searchVal !== '') return true;
    
    // Normal exact match
    return itemVal === searchVal;
  };

  // DEBUG: Show what data we have for this model
  const modelMatches = ALL_MODELS.filter(item => normalize(item.model_type) === normalize(model));
  console.log(`🔍 Found ${modelMatches.length} entries for model ${model}`);
  
  // Show available configs for debugging
  const availableConfigs = [...new Set(modelMatches.map(item => item.config))];
  console.log(`🔍 Available configs for ${model}:`, availableConfigs);
  console.log(`🔍 Looking for config: "${configValue}"`);
  
  const normalizedConfig = normalize(configValue);
  console.log(`🔍 Normalized config to find: "${normalizedConfig}"`);
  
  // Find matching entries with improved variant logic
  const matches = modelMatches.filter(item => {
    const itemNormalizedConfig = normalize(item.config);
    const configMatch = itemNormalizedConfig === normalizedConfig;
    
    if (!configMatch) return false;
    
    console.log(`✅ Config match found: "${item.config}" matches "${configValue}"`);
    
    // Apply flexible variant matching
    const v1Match = matchVariant(item.variant1, variant1);
    const v2Match = matchVariant(item.variant2, variant2);
    const v3Match = matchVariant(item.variant3, variant3);
    const v4Match = matchVariant(item.variant4, variant4);
    
    console.log('🔍 Detailed variant matching:');
    console.log(`  v1: item="${item.variant1}" search="${variant1}" match=${v1Match}`);
    console.log(`  v2: item="${item.variant2}" search="${variant2}" match=${v2Match}`);
    console.log(`  v3: item="${item.variant3}" search="${variant3}" match=${v3Match}`);
    console.log(`  v4: item="${item.variant4}" search="${variant4}" match=${v4Match}`);
    
    // SPECIAL LOGIC: If variant1 is empty in item, focus on variants 2, 3, 4
    if (normalize(item.variant1) === '' && normalize(variant1) !== '') {
      console.log('🎯 Item has empty variant1, focusing on variants 2-4');
      const alternativeMatch = v2Match && v3Match && v4Match;
      console.log(`🎯 Alternative match result: ${alternativeMatch}`);
      return alternativeMatch;
    }
    
    // Standard matching: all variants must match
    const allMatch = v1Match && v2Match && v3Match && v4Match;
    console.log(`🎯 Standard match result: ${allMatch}`);
    return allMatch;
  });

  console.log(`✅ Total matches found: ${matches.length}`);

  if (matches.length > 0) {
    const match = matches[0];
    console.log('🎯 Using match:', {
      model_code: match.model_code,
      model_description: match.model_description,
      control_panel_code: match.control_panel_code,
      control_panel_description: match.control_panel_description
    });
    
    // Populate the form fields
    document.getElementById('modelCodeInput').value = match.model_code || '';
    document.getElementById('modelDescInput').value = match.model_description || '';
    document.getElementById('controlPanelCodeInput').value = match.control_panel_code || '';
    document.getElementById('controlPanelDescInput').value = match.control_panel_description || '';
    document.getElementById('addItemBtn').disabled = false;
    
    console.log('✅ Successfully populated model details');
  } else {
    console.warn(`❌ No match found for model: ${model}, config: ${configValue}`);
    
    // Additional debugging: show what we were trying to match against
    if (modelMatches.length > 0) {
      console.log('🔍 Available configurations for this model:');
      modelMatches.forEach((item, index) => {
        if (index < 5) { // Show first 5 for debugging
          console.log(`  ${index + 1}. Config: "${item.config}"`);
          console.log(`     Variants: v1="${item.variant1}" v2="${item.variant2}" v3="${item.variant3}" v4="${item.variant4}"`);
        }
      });
    }
    
    clearModelDetails();
  }
}

// Handle model type selection
modelTypeSelect.addEventListener('change', function () {
  const selectedModel = this.value;
  console.log("🎯 Model type selected:", selectedModel);

  // DEBUG: Show matching entries RIGHT HERE
  if (typeof ALL_MODELS !== 'undefined' && selectedModel) {
      console.log(`🔍 DEBUG: Checking data for "${selectedModel}"`);
      const exactMatches = ALL_MODELS.filter(m => m.model_type === selectedModel);
      const partialMatches = ALL_MODELS.filter(m => 
          m.model_type && m.model_type.toLowerCase().includes(selectedModel.toLowerCase())
      );
      console.log(`🔍 Exact matches for "${selectedModel}":`, exactMatches.length);
      console.log(`🔍 Partial matches:`, partialMatches.map(m => m.model_type));
      
      if (exactMatches.length > 0) {
          console.log(`🔍 First exact match:`, exactMatches[0]);
      }
  }

  resetDropdown(configSelect);
  updateVariantLabels(selectedModel);

  // Clear details when model changes
  clearModelDetails();

  if (selectedModel) {
    configSelect.disabled = false;

    const uniqueConfigs = getConfigsForModel(selectedModel);
    configSelect.innerHTML = ''; // Clear previous options

    console.log(`🔧 Found ${uniqueConfigs.length} configurations for ${selectedModel}`);

    if (uniqueConfigs.length > 0) {
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select config';
      placeholder.disabled = true;
      placeholder.selected = true;
      configSelect.appendChild(placeholder);

      uniqueConfigs.forEach(cfg => {
        const option = document.createElement('option');
        option.value = cfg.value;
        option.textContent = cfg.label;
        configSelect.appendChild(option);
      });

      console.log(`✅ Successfully populated ${uniqueConfigs.length} config options for ${selectedModel}`);
    } else {
      console.warn(`⚠️ No configurations found for ${selectedModel}`);

      // Add a placeholder option indicating no configs
      const option = document.createElement('option');
      option.value = '';
      option.textContent = `No configurations available for ${selectedModel}`;
      option.disabled = true;
      option.selected = true;
      configSelect.appendChild(option);
    }
  }
});

// Handle configuration selection - IMPROVED VERSION
configSelect.addEventListener('change', function () {
  const selectedModel = modelTypeSelect.value;
  const selectedConfig = configSelect.value;

  console.log(`🔧 Config selected: ${selectedConfig} for model: ${selectedModel}`);

  // Reset all variant dropdowns first
  resetDropdown(variant1Select, variant1Label.textContent);
  resetDropdown(variant2Select, variant2Label.textContent);
  resetDropdown(variant3Select, variant3Label.textContent);
  resetDropdown(variant4Select, variant4Label.textContent);

  // Clear details when config changes
  clearModelDetails();

  if (!selectedConfig || !selectedModel) return;

  // NEW APPROACH: Get variant options based on BOTH model AND config
  if (typeof ALL_MODELS !== 'undefined' && ALL_MODELS.length > 0) {
    console.log('🎯 Using ALL_MODELS to determine variant options for specific config');
    
    const normalize = val => {
      if (val === null || val === undefined) return '';
      return val.toString().trim().toLowerCase()
        .replace(/ø/g, '0')
        .replace(/\s+/g, ' ');
    };

    // Find all entries that match this specific model + config combination
    const configMatches = ALL_MODELS.filter(item => 
      normalize(item.model_type) === normalize(selectedModel) &&
      normalize(item.config) === normalize(selectedConfig)
    );

    console.log(`🔍 Found ${configMatches.length} entries for ${selectedModel} + ${selectedConfig}`);

    if (configMatches.length > 0) {
      // Extract unique variant options from the matching entries
      let uniqueV1 = [...new Set(configMatches.map(item => item.variant1).filter(v => v && v.trim()))];
      const uniqueV2 = [...new Set(configMatches.map(item => item.variant2).filter(v => v && v.trim()))];
      const uniqueV3 = [...new Set(configMatches.map(item => item.variant3).filter(v => v && v.trim()))];
      const uniqueV4 = [...new Set(configMatches.map(item => item.variant4).filter(v => v && v.trim()))];

      // Normalize variant1 options - handle both "MiDs" to "Mids" and "GlassLess" to "Glassless"
      uniqueV1 = uniqueV1.map(v => {
        if (v === 'MiDs') {
          console.log('🔄 Normalizing "MiDs" to "Mids"');
          return 'Mids';
        }
        if (v === 'GlassLess') {
          console.log('🔄 Normalizing "GlassLess" to "Glassless"');
          return 'Glassless';
        }
        return v;
      });

      // Remove duplicates after normalization
      uniqueV1 = [...new Set(uniqueV1)];

      console.log('🎯 Variant options for this specific config:');
      console.log(`  V1 options: [${uniqueV1.join(', ')}]`);
      console.log(`  V2 options: [${uniqueV2.join(', ')}]`);
      console.log(`  V3 options: [${uniqueV3.join(', ')}]`);
      console.log(`  V4 options: [${uniqueV4.join(', ')}]`);

      // Check if this is a single start/stage config that should exclude multi-stage options
      const isSingleStartStage = selectedConfig.toLowerCase().includes('1 start') && 
                                selectedConfig.toLowerCase().includes('1 stage');
      
      if (isSingleStartStage) {
        console.log('🚫 Single start/stage config detected - filtering variant1 options');
        
        // Filter out incompatible options from variant1
        const originalV1Count = uniqueV1.length;
        uniqueV1 = uniqueV1.filter(option => {
          const optionLower = option.toLowerCase();
          const isIncompatible = optionLower.includes('mag') || 
                                optionLower.includes('multi') ||
                                optionLower.includes('stage') ||
                                optionLower.includes('mags');
          
          if (isIncompatible) {
            console.log(`🚫 Filtering out incompatible variant1 option: "${option}"`);
          }
          
          return !isIncompatible;
        });
        
        console.log(`🔍 Filtered variant1 options: ${originalV1Count} → ${uniqueV1.length}`);
        console.log(`  Remaining V1 options: [${uniqueV1.join(', ')}]`);
      }

      // Populate variant1 dropdown
      if (uniqueV1.length > 0) {
        variant1Select.disabled = false;
        uniqueV1.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant1Select.appendChild(option);
        });
        // Auto-select if only one option
        if (uniqueV1.length === 1) {
          variant1Select.value = uniqueV1[0];
          console.log(`✅ Auto-selected variant1: "${uniqueV1[0]}"`);
        }
      } else {
        console.log('ℹ️ No variant1 options available for this config - keeping disabled');
        variant1Select.disabled = true;
      }

      // Populate variant2 dropdown
      if (uniqueV2.length > 0) {
        variant2Select.disabled = false;
        uniqueV2.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant2Select.appendChild(option);
        });
        if (uniqueV2.length === 1) {
          variant2Select.value = uniqueV2[0];
          console.log(`✅ Auto-selected variant2: "${uniqueV2[0]}"`);
        }
      } else {
        variant2Select.disabled = true;
      }

      // Populate variant3 dropdown
      if (uniqueV3.length > 0) {
        variant3Select.disabled = false;
        uniqueV3.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant3Select.appendChild(option);
        });
        if (uniqueV3.length === 1) {
          variant3Select.value = uniqueV3[0];
          console.log(`✅ Auto-selected variant3: "${uniqueV3[0]}"`);
        }
      } else {
        variant3Select.disabled = true;
      }

      // Populate variant4 dropdown
      if (uniqueV4.length > 0) {
        variant4Select.disabled = false;
        uniqueV4.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant4Select.appendChild(option);
        });
        if (uniqueV4.length === 1) {
          variant4Select.value = uniqueV4[0];
          console.log(`✅ Auto-selected variant4: "${uniqueV4[0]}"`);
        }
      } else {
        variant4Select.disabled = true;
      }

    } else {
      console.warn('⚠️ No matching entries found for this model+config combination');
    }
  } else {
    // Fallback to VARIANT_DATA if ALL_MODELS not available
    console.log('📋 Falling back to VARIANT_DATA for variant options');
    
    if (typeof VARIANT_DATA !== 'undefined') {
      const v1Options = VARIANT_DATA.options.variant1[selectedModel];
      const v2Options = VARIANT_DATA.options.variant2[selectedModel];
      const v3Options = VARIANT_DATA.options.variant3[selectedModel];
      const v4Options = VARIANT_DATA.options.variant4[selectedModel];

      // Populate variant1
      if (v1Options && v1Options.length > 0) {
        variant1Select.disabled = false;
        v1Options.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant1Select.appendChild(option);
        });
        if (v1Options.length === 1) {
          variant1Select.value = v1Options[0];
        }
      }

      // Populate variant2
      if (v2Options && v2Options.length > 0) {
        variant2Select.disabled = false;
        v2Options.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant2Select.appendChild(option);
        });
        if (v2Options.length === 1) {
          variant2Select.value = v2Options[0];
        }
      }

      // Populate variant3
      if (v3Options && v3Options.length > 0) {
        variant3Select.disabled = false;
        v3Options.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant3Select.appendChild(option);
        });
        if (v3Options.length === 1) {
          variant3Select.value = v3Options[0];
        }
      }

      // Populate variant4
      if (v4Options && v4Options.length > 0) {
        variant4Select.disabled = false;
        v4Options.forEach(v => {
          const option = document.createElement('option');
          option.value = v;
          option.textContent = v;
          variant4Select.appendChild(option);
        });
        if (v4Options.length === 1) {
          variant4Select.value = v4Options[0];
        }
      }
    }
  }

  // Try to auto populate if everything is prefilled
  tryPopulateIfReady();
});

// Handle variant selections
variant1Select.addEventListener('change', tryPopulateIfReady);
variant2Select.addEventListener('change', tryPopulateIfReady);
variant3Select.addEventListener('change', tryPopulateIfReady);
variant4Select.addEventListener('change', tryPopulateIfReady);

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
    
    // Check if VARIANT_DATA exists
    if (typeof VARIANT_DATA === 'undefined') {
      // Hide all variant containers if VARIANT_DATA is not available
      if (variant1Container) variant1Container.style.display = 'none';
      if (variant2Container) variant2Container.style.display = 'none';
      if (variant3Container) variant3Container.style.display = 'none';
      if (variant4Container) variant4Container.style.display = 'none';
      return;
    }
    
    // Check if variant1 has options
    if (VARIANT_DATA.options.variant1[selectedModel] && 
        VARIANT_DATA.options.variant1[selectedModel].length > 0) {
      // Show variant1 field
      if (variant1Container) variant1Container.style.display = 'block';
      
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
      if (variant1Container) variant1Container.style.display = 'none';
      console.log("Hiding variant1 field - no options available");
    }
    
    // Check if variant2 has options
    if (VARIANT_DATA.options.variant2[selectedModel] && 
        VARIANT_DATA.options.variant2[selectedModel].length > 1) {
      // Show variant2 field
      if (variant2Container) variant2Container.style.display = 'block';
      
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
      if (variant2Container) variant2Container.style.display = 'none';
      console.log("Hiding variant2 field - no options available");
    }
    
    // Check if variant3 has options
    if (VARIANT_DATA.options.variant3[selectedModel] && 
        VARIANT_DATA.options.variant3[selectedModel].length > 1) {
      // Show variant3 field
      if (variant3Container) variant3Container.style.display = 'block';
      
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
      if (variant3Container) variant3Container.style.display = 'none';
      console.log("Hiding variant3 field - no options available");
    }

    // Check if variant4 has options
    if (VARIANT_DATA.options.variant4[selectedModel] && 
        VARIANT_DATA.options.variant4[selectedModel].length > 1) {
      // Show variant4 field
      if (variant4Container) variant4Container.style.display = 'block';
      
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
      if (variant4Container) variant4Container.style.display = 'none';
      console.log("Hiding variant4 field - no options available");
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
    logoImg.crossOrigin = 'anonymous';
    logoImg.src = 'images/processed/MTball_transparent.png';

    logoImg.onload = function () {
        finalizePDF();
    };

    logoImg.onerror = function () {
        console.warn('⚠️ Logo failed to load. Continuing without logo.');
        finalizePDF();
    };

    function finalizePDF() {
        try {
            // ✅ 1. Draw header background
            doc.setFillColor(45, 45, 45);
            doc.rect(0, 5, pageWidth, 20, 'F');

            // ✅ 2. Add logo ONCE here
            if (logoImg.complete) {
                doc.addImage(logoImg, 'PNG', 10, 8, 60, 15);
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
                styles: { fontSize: 9, cellPadding: 3 },
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
                doc.text(`Generated on ${new Date().toLocaleString()} - Page ${i} of ${pageCount}`, 
                         pageWidth / 2, doc.internal.pageSize.height - 10, { align: 'center' });
            }

            // ✅ 10. Save PDF
            doc.save(filename);

            // ✅ 11. Clean up the form after successful PDF generation
            cleanupAfterExport();

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again.');
        }
    }
}

// Function to clean up form after PDF export
function cleanupAfterExport() {
    try {
        // 1. Clear Tender Enquiry Header fields
        const headerFields = [
            'customerInput', 'customer', 'customerName',
            'siteInput', 'site', 'siteLocation',
            'mtQuoteInput', 'mtQuote', 'mtQuoteNumber', 'quoteNumber',
            'requestedByInput', 'requestedBy', 'requester',
            'dateInput', 'date', 'tenderDate', 'enquiryDate'
        ];
        
        headerFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
                console.log(`Cleared field: ${fieldId}`);
            }
        });
        
        // 2. Clear Comments section
        const commentFields = [
            'commentsInput', 'comments', 'comment', 'remarksInput', 'remarks', 'notes', 'notesInput'
        ];
        
        commentFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
                console.log(`Cleared comment field: ${fieldId}`);
            }
        });
        
        // 3. Clear all items from the table (Tender Items section)
        if (typeof clearAllItems === 'function') {
            clearAllItems();
            console.log('Cleared all table items');
        }
        
        // 4. Reset selection fields and tender item inputs
        if (typeof resetSelectionFields === 'function') {
            resetSelectionFields();
            console.log('Reset selection fields');
        }
        
        // 5. Clear any additional tender item related fields
        const tenderItemFields = [
            'modelCodeInput', 'modelCode',
            'modelDescInput', 'modelDesc', 'modelDescription',
            'controlPanelCodeInput', 'controlPanelCode',
            'controlPanelDescInput', 'controlPanelDesc', 'controlPanelDescription',
            'quantityInput', 'quantity', 'qty'
        ];
        
        tenderItemFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = field.type === 'number' ? '1' : '';
                console.log(`Cleared tender item field: ${fieldId}`);
            }
        });
        
        // 6. Clear any textareas that might exist
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.value = '';
            console.log(`Cleared textarea: ${textarea.id || 'unnamed'}`);
        });
        
        // 7. Reset any select dropdowns to default
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
            console.log(`Reset select: ${select.id || 'unnamed'}`);
        });
        
        // 8. Clear any input fields that might have been missed
        const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="number"]');
        allInputs.forEach(input => {
            if (input.type === 'number') {
                input.value = '1'; // Default quantity
            } else if (input.type === 'date') {
                input.value = '';
            } else {
                input.value = '';
            }
        });
        
        // 9. Disable any buttons that should be disabled after reset
        const addItemBtn = document.getElementById('addItemBtn');
        if (addItemBtn) {
            addItemBtn.disabled = true;
        }
        
        // Show success message
        alert('PDF exported successfully! All sections have been cleared for next tender.');
        
        console.log('Complete form cleanup finished after PDF export');
        
    } catch (error) {
        console.error('Error cleaning up form:', error);
        // Don't show error to user since PDF was created successfully
        alert('PDF exported successfully! Please manually clear the form for next use.');
    }
  }
});