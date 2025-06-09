// Embedded data for offline functionality
const EMBEDDED_MODEL_CONFIGURATIONS = {
  "ESP": [
    "2 Start x 5 Stage",
    "1 Start x 5 Stage"
  ],
  "HTR270": [
    "2 Start x 3 Stage x 1800mm x Ø270mm",
    "2 Start x 2 Stage x 1800mm x Ø270mm",
    "1 Start x 3 Stage x 1800mm x Ø270mm",
    "1 Start x 2 Stage x 1800mm x Ø270mm"
  ],
  "HTR400": [
    "1 Start x 3 Stage x 2000mm x Ø400mm",
    "1 Start x 2 Stage x 2000mm x Ø400mm",
    "2 Start x 3 Stage x 2000mm x Ø400mm",
    "4 Start x 1 Stage x 2000mm x Ø400mm",
    "2 Start x 2 Stage x 2000mm x Ø400mm"
  ],
  "RED400": [
    "1 Start x 2 Stage x 1000mm x Ø400mm",
    "1 Start x 1 Stage x 1000mm x Ø400mm + Scalper Drum",
    "1 Start x 1 Stage x 1500mm x Ø400mm",
    "1 Start x 1 Stage x 1500mm x Ø400mm (Scalper)",
    "1 Start x 1 Stage x 1000mm x Ø400mm",
    "1 Start x 1 Stage x 1000mm x Ø400mm (Scalper)",
    "1 Start x 3 Stage x 1000mm x Ø400mm",
    "1 Start x 2 Stage x 1000mm x Ø400mm + Scalper Drum",
    "1 Start x 2 Stage x 1500mm x Ø400mm",
    "1 Start x 1 Stage x 1500mm x Ø400mm + Scalper Drum",
    "1 Start x 3 Stage x 1500mm x Ø400mm",
    "1 Start x 2 Stage x 1500mm x Ø400mm + Scalper Drum"
  ],
  "RED600": [
    "1 Start x 3 Stage x 1500mm x Ø600mm",
    "1 Start x 2 Stage x 1500mm x Ø600mm + Scalper Drum",
    "1 Start x 2 Stage x 1500mm x Ø600mm",
    "1 Start x 1 Stage x 1500mm x Ø600mm + Scalper Drum",
    "1 Start x 1 Stage x 1500mm x Ø600mm",
    "1 Start x 1 Stage x 1500mm x Ø600mm (Scalper)",
    "1 Start x 3 Stage x 1000mm x Ø600mm",
    "1 Start x 2 Stage x 1000mm x Ø600mm + Scalper Drum",
    "1 Start x 2 Stage x 1000mm x Ø600mm",
    "1 Start x 1 Stage x 1000mm x Ø600mm + Scalper Drum",
    "1 Start x 1 Stage x 1000mm x Ø600mm",
    "1 Start x 1 Stage x 1000mm x Ø600mm (Scalper)"
  ],
  "RER": [
    "1 Start x 3 Stage x 1000mm x Ø100mm",
    "1 Start x 2 Stage x 1000mm x Ø100mm",
    "1 Start x 3 Stage x 1500mm x Ø100mm",
    "1 Start x 1 Stage x 1000mm x Ø100mm",
    "1 Start x 1 Stage x 1500mm x Ø100mm",
    "1 Start x 2 Stage x 1500mm x Ø100mm"
  ],
  "IRM": [
    "2 Start x 2 Stage x 760mm x Ø133mm + Scalper Roll",
    "2 Start x 2 Stage x 760mm x Ø133mm",
    "2 Start x 2 Stage x 760mm x Ø133mm - Direct Drive",
    "2 Start x 2 Stage x 1000mm x Ø160mm",
    "2 Start x 2 Stage x 1000mm x Ø160mm - Direct Drive",
    "2 Start x 2 Stage x 1000mm x Ø160mm + Scalper Roll"
  ],
  "WHIMS": [
    "16 Pole x 120mm - Mags / Non-Mags",
    "16 Pole x 120mm- Mags / Mids / Non-Mags",
    "16 Pole x 200mm - Mags / Non-Mags",
    "16 Pole x 200mm - Mags / Mids / Non-Mags",
    "16 Pole x 68mm - Mags / Non-Mags",
    "16 Pole x 68mm - Mags / Mids / Non-Mags"
  ],
  "RTF": [
    "105 tph - Table Diameter 1600mm",
    "12 tph - Table Diameter 1000mm",
    "35 tph - Table Diameter 1200mm",
    "50 tph - Table Diameter 1400mm"
  ],
  "UCC": [
    "Square 1200mm x 1200mm",
    "Square 900mm x 900mm",
    "Square 1800mm x 1800mm",
    "Square 600mm x 600mm",
    "Retangular 1200mm x 2400mm"
  ]
};

const EMBEDDED_MODEL_VARIANTS = {
  "ESP": {
    "Variant 1": {
      "name": "Polarity",
      "options": ["Negative (-)", "Positive (+)"]
    },
    "Variant 3": {
      "name": "Power Supply",
      "options": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"]
    },
    "Variant 4": {
      "name": "Frequency",
      "options": ["50Hz", "60Hz"]
    }
  },
  "HTR270": {
    "Variant 1": {
      "name": "Electrode",
      "options": ["Glass Composite Plate", "Stainless Steel"]
    },
    "Variant 2": {
      "name": "Power Supply",
      "options": ["400V / 3P", "480V / 3P"]
    },
    "Variant 3": {
      "name": "Frequency",
      "options": ["50Hz", "60Hz"]
    }
  },
  "HTR400": {
    "Variant 1": {
      "name": "Electrode",
      "options": ["Glass Composite Plate", "Stainless Steel"]
    },
    "Variant 2": {
      "name": "Power Supply",
      "options": ["400V / 3P", "480V / 3P"]
    },
    "Variant 3": {
      "name": "Frequency",
      "options": ["50Hz", "60Hz"]
    }
  }
};

// Global data variables
let modelDetails = {};
let modelConfigurations = EMBEDDED_MODEL_CONFIGURATIONS;
let modelVariants = EMBEDDED_MODEL_VARIANTS;

// Load data function with embedded fallback
async function loadData() {
    try {
        console.log('Loading data...');
        
        // Try to load external model details, use embedded data as fallback
        try {
            const response = await fetch('./data/model_details.json');
            if (response.ok) {
                const externalData = await response.json();
                modelDetails = externalData;
                console.log('External model details loaded successfully');
            } else {
                throw new Error('External data not available');
            }
        } catch (e) {
            console.log('Using embedded sample data for model details');
            // Create sample data based on configurations and variants
            modelDetails = {};
            
            for (const modelType in modelConfigurations) {
                modelDetails[modelType] = {};
                
                for (const config of modelConfigurations[modelType]) {
                    modelDetails[modelType][config] = [];
                    
                    // Generate sample combinations based on variants
                    const variants = modelVariants[modelType] || {};
                    const variantKeys = Object.keys(variants);
                    
                    if (variantKeys.length > 0) {
                        // Generate combinations for each variant
                        const generateCombinations = (variantIndex = 0, currentCombination = {}) => {
                            if (variantIndex >= variantKeys.length) {
                                // Create a model entry for this combination
                                const variantKey = variantKeys[0];
                                const firstVariantValue = currentCombination[variantKey] || variants[variantKey].options[0];
                                
                                const modelCode = `${modelType}${Math.floor(Math.random() * 9000) + 1000}-${firstVariantValue.substring(0, 1)}-${Math.floor(Math.random() * 900) + 100}`;
                                
                                modelDetails[modelType][config].push({
                                    "Model configuration": config,
                                    "Model No.": `${modelType}${Math.floor(Math.random() * 9000) + 1000}`,
                                    "Model Code": modelCode,
                                    "Model Description": `${modelType} ${config}\\nConfiguration: ${config}`,
                                    "Control Panel No.": `${modelType}${Math.floor(Math.random() * 9000) + 1000}`,
                                    "Control Panel Code": `${modelType}CP-${Math.floor(Math.random() * 900) + 100}`,
                                    "Control Panel Description": `Control Panel for ${modelType} ${config}`,
                                    "Variant 1": currentCombination["Variant 1"] || "",
                                    "Variant 2": currentCombination["Variant 2"] || "",
                                    "Variant 3": currentCombination["Variant 3"] || "",
                                    "Variant 4": currentCombination["Variant 4"] || ""
                                });
                                return;
                            }
                            
                            const variantKey = variantKeys[variantIndex];
                            const options = variants[variantKey].options;
                            
                            for (const option of options) {
                                const newCombination = { ...currentCombination };
                                newCombination[variantKey] = option;
                                generateCombinations(variantIndex + 1, newCombination);
                            }
                        };
                        
                        generateCombinations();
                    } else {
                        // No variants, create a simple entry
                        modelDetails[modelType][config].push({
                            "Model configuration": config,
                            "Model No.": `${modelType}${Math.floor(Math.random() * 9000) + 1000}`,
                            "Model Code": `${modelType}-STD-001`,
                            "Model Description": `${modelType} ${config}\\nStandard Configuration`,
                            "Control Panel No.": `${modelType}${Math.floor(Math.random() * 9000) + 1000}`,
                            "Control Panel Code": `${modelType}CP-STD-001`,
                            "Control Panel Description": `Standard Control Panel for ${modelType} ${config}`,
                            "Variant 1": "",
                            "Variant 2": "",
                            "Variant 3": "",
                            "Variant 4": ""
                        });
                    }
                }
            }
        }
        
        console.log('Data loaded successfully');
        console.log('Available model types:', Object.keys(modelConfigurations));
        console.log('Sample model details:', Object.keys(modelDetails));
        
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

// Get available model types
function getModelTypes() {
    const types = Object.keys(modelConfigurations);
    console.log('Getting model types:', types);
    return types;
}

// Get configurations for a specific model type
function getConfigurations(modelType) {
    const configs = modelConfigurations[modelType] || [];
    console.log(`Getting configurations for ${modelType}:`, configs);
    return configs;
}

// Get variants for a specific model type
function getVariants(modelType) {
    const variants = modelVariants[modelType] || {};
    console.log(`Getting variants for ${modelType}:`, Object.keys(variants));
    return variants;
}

// Find matching model details based on selections
function findModelDetails(modelType, configuration, variants) {
    console.log('Finding model details for:', { modelType, configuration, variants });
    
    if (!modelDetails[modelType] || !modelDetails[modelType][configuration]) {
        console.error(`No data found for ${modelType} - ${configuration}`);
        return null;
    }
    
    const configurationItems = modelDetails[modelType][configuration];
    console.log(`Found ${configurationItems.length} items for ${modelType} - ${configuration}`);
    
    if (!variants || Object.keys(variants).length === 0) {
        console.log('No variants specified, returning first item');
        return configurationItems[0] || null;
    }
    
    // Find the best match based on variants
    let bestMatch = null;
    let bestMatchScore = -1;
    
    for (const item of configurationItems) {
        let matchScore = 0;
        let totalVariants = 0;
        
        for (const [variantKey, variantValue] of Object.entries(variants)) {
            if (variantValue && variantValue.trim() !== '') {
                totalVariants++;
                if (item[variantKey] === variantValue) {
                    matchScore++;
                }
            }
        }
        
        const matchPercentage = totalVariants > 0 ? matchScore / totalVariants : 0;
        
        console.log(`Item ${item['Model Code']}: ${matchScore}/${totalVariants} variants match (${(matchPercentage * 100).toFixed(1)}%)`);
        
        if (matchPercentage > bestMatchScore) {
            bestMatchScore = matchPercentage;
            bestMatch = item;
        }
    }
    
    if (bestMatch && bestMatchScore >= 0.5) {
        console.log('Best match found:', bestMatch['Model Code']);
        return bestMatch;
    }
    
    console.log('No good match found, returning first item');
    return configurationItems[0] || null;
}

// Export functions for use in other scripts
window.DataManager = {
    loadData,
    getModelTypes,
    getConfigurations,
    getVariants,
    findModelDetails
};

