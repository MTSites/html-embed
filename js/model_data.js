const MODEL_DATA = {
  "models": {
    "ESP": [
    "2 Start x 5 Stage",
    "1 Start x 5 Stage"
  ],
  "HTR270": [
    "2 Start x 3 Stage x 1800mm x \u00d8270mm",
    "2 Start x 2 Stage x 1800mm x \u00d8270mm",
    "1 Start x 3 Stage x 1800mm x \u00d8270mm",
    "1 Start x 2 Stage x 1800mm x \u00d8270mm"
  ],
  "HTR400": [
    "1 Start x 3 Stage x 2000mm x \u00d8400mm",
    "1 Start x 2 Stage x 2000mm x \u00d8400mm",
    "2 Start x 3 Stage x 2000mm x \u00d8400mm",
    "4 Start x 1 Stage x 2000mm x \u00d8400mm",
    "2 Start x 2 Stage x 2000mm x \u00d8400mm"
  ],
  "RED400": [
    "1 Start x 2 Stage x 1000mm x \u00d8400mm",
    "1 Start x 1 Stage x 1000mm x \u00d8400mm + Scalper Drum",
    "1 Start x 1 Stage x 1500mm x \u00d8400mm",
    "1 Start x 1 Stage x 1500mm x \u00d8400mm (Scalper)",
    "1 Start x 1 Stage x 1000mm x \u00d8400mm",
    "1 Start x 1 Stage x 1000mm x \u00d8400mm (Scalper)",
    "1 Start x 3 Stage x 1000mm x \u00d8400mm",
    "1 Start x 2 Stage x 1000mm x \u00d8400mm + Scalper Drum",
    "1 Start x 2 Stage x 1500mm x \u00d8400mm",
    "1 Start x 1 Stage x 1500mm x \u00d8400mm + Scalper Drum",
    "1 Start x 3 Stage x 1500mm x \u00d8400mm",
    "1 Start x 2 Stage x 1500mm x \u00d8400mm + Scalper Drum"
  ],
  "RED600": [
    "1 Start x 3 Stage x 1500mm x \u00d8600mm",
    "1 Start x 2 Stage x 1500mm x \u00d8600mm + Scalper Drum",
    "1 Start x 2 Stage x 1500mm x \u00d8600mm",
    "1 Start x 1 Stage x 1500mm x \u00d8600mm + Scalper Drum",
    "1 Start x 1 Stage x 1500mm x \u00d8600mm",
    "1 Start x 1 Stage x 1500mm x \u00d8600mm (Scalper)",
    "1 Start x 3 Stage x 1000mm x \u00d8600mm",
    "1 Start x 2 Stage x 1000mm x \u00d8600mm + Scalper Drum",
    "1 Start x 2 Stage x 1000mm x \u00d8600mm",
    "1 Start x 1 Stage x 1000mm x \u00d8600mm + Scalper Drum",
    "1 Start x 1 Stage x 1000mm x \u00d8600mm",
    "1 Start x 1 Stage x 1000mm x \u00d8600mm (Scalper)"
  ],
  "RER": [
    "1 Start x 3 Stage x 1000mm x \u00d8100mm",
    "1 Start x 2 Stage x 1000mm x \u00d8100mm",
    "1 Start x 3 Stage x 1500mm x \u00d8100mm",
    "1 Start x 1 Stage x 1000mm x \u00d8100mm",
    "1 Start x 1 Stage x 1500mm x \u00d8100mm",
    "1 Start x 2 Stage x 1500mm x \u00d8100mm"
  ],
  "IRM": [
    "2 Start x 2 Stage x 760mm x \u00d8133mm + Scalper Roll",
    "2 Start x 2 Stage x 760mm x \u00d8133mm",
    "2 Start x 2 Stage x 760mm x \u00d8133mm - Direct Drive",
    "2 Start x 2 Stage x 1000mm x \u00d8160mm",
    "2 Start x 2 Stage x 1000mm x \u00d8160mm - Direct Drive",
    "2 Start x 2 Stage x 1000mm x \u00d8160mm + Scalper Roll"
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
  },
  "configurations": {
    "ESP 2x5": {
      "description": "2 Start x 5 Stage ",
      "model_number": "ESP9002"
    },
    "ESP 1x5": {
      "description": "1 Start x 5 Stage ",
      "model_number": "ESP9005"
    },
    "HTR270 1x2": {
      "description": "1 Start x 2 Stage x 1800mm x \u00d8270mm ",
      "model_number": "HTR9012"
    },
    "HTR270 1x3": {
      "description": "1 Start x 3 Stage x 1800mm x \u00d8270mm ",
      "model_number": "HTR9004"
    },
    "HTR270 2x2": {
      "description": "2 Start x 2 Stage x 1800mm x \u00d8270mm ",
      "model_number": "HTR9001"
    },
    "HTR270 2x3": {
      "description": "2 Start x 3 Stage x 1800mm x \u00d8270mm ",
      "model_number": "HTR9000"
    },
    "HTR400 2x3": {
      "description": "2 Start x 3 Stage x 2000mm x \u00d8400mm ",
      "model_number": "HTR9034"
    },
    "HTR400 2x2": {
      "description": "2 Start x 2 Stage x 2000mm x \u00d8400mm ",
      "model_number": "HTR9036"
    },
    "HTR400 4x1": {
      "description": "4 Start x 1 Stage x 2000mm x \u00d8400mm ",
      "model_number": "HTR9035"
    },
    "HTR400 1x3": {
      "description": "1 Start x 3 Stage x 2000mm x \u00d8400mm ",
      "model_number": "HTR9032"
    },
    "HTR400 1x2": {
      "description": "1 Start x 2 Stage x 2000mm x \u00d8400mm ",
      "model_number": "HTR9033"
    },
    "IRM 760x133": {
      "description": "2 Start x 2 Stage x 760mm x \u00d8133mm ",
      "model_number": "RR9011"
    },
    "IRM 1000x160": {
      "description": "2 Start x 2 Stage x 1000mm x \u00d8160mm ",
      "model_number": "RR9101"
    },
    "RER 1x3x1000": {
      "description": "1 Start x 3 Stage x 1000mm x \u00d8100mm ",
      "model_number": "REM9001"
    },
    "RER 1x2x1000": {
      "description": "1 Start x 2 Stage x 1000mm x \u00d8100mm ",
      "model_number": "REM9004"
    },
    "RER 1x1x1000": {
      "description": "1 Start x 1 Stage x 1000mm x \u00d8100mm ",
      "model_number": "REM9009"
    },
    "RER 1x3x1500": {
      "description": "1 Start x 3 Stage x 1500mm x \u00d8100mm ",
      "model_number": "REM9007"
    },
    "RER 1x2x1500": {
      "description": "1 Start x 2 Stage x 1500mm x \u00d8100mm ",
      "model_number": "REM9011"
    },
    "RER 1x1x1500": {
      "description": "1 Start x 1 Stage x 1500mm x \u00d8100mm ",
      "model_number": "REM9010"
    },
    "UCC 600x600": {
      "description": "Square 600mm x 600mm",
      "model_number": "UCC9012"
    },
    "UCC 900x900": {
      "description": "Square 900mm x 900mm",
      "model_number": "UCC9008"
    },
    "UCC 1200x1200": {
      "description": "Square 1200mm x 1200mm",
      "model_number": "UCC9007"
    },
    "UCC 1800x1800": {
      "description": "Square 1800mm x 1800mm",
      "model_number": "UCC9011"
    },
    "UCC 1200x2400": {
      "description": "Retangular 1200mm x 2400mm",
      "model_number": "UCC9015"
    },
    "WHIMS 16Px68x2P": {
      "description": "16 Pole x 68mm - Mags / Non-Mags",
      "model_number": "RW9011"
    },
    "WHIMS 16Px68x3P": {
      "description": "16 Pole x 68mm - Mags / Mids / Non-Mags ",
      "model_number": "RW9012"
    },
    "WHIMS 16Px120x2P": {
      "description": "16 Pole x 120mm - Mags / Non-Mags",
      "model_number": "RW9001"
    },
    "WHIMS 16Px120x3P": {
      "description": "16 Pole x 120mm- Mags / Mids / Non-Mags ",
      "model_number": "RW9002"
    },
    "WHIMS 16Px200x2P": {
      "description": "16 Pole x 200mm - Mags / Non-Mags",
      "model_number": "RW9003"
    },
    "WHIMS 16Px200x3P": {
      "description": "16 Pole x 200mm - Mags / Mids / Non-Mags ",
      "model_number": "RW9004"
    }
  },
  "variants": {
    "variant1": {
      "HTR270": ["Glass Composite", "Glassless"],
      "HTR400": ["Glass Composite", "Glassless"],
      "RED400": ["Mags", "Non-Mags"],
      "RED600": ["Mags", "Non-Mags"],
      "RER": ["4x2", "3x1", "6x1.5"],
      "IRM": ["Non-Mags"],
      "WHIMS": ["Air Cooled", "Water Cooled"],
      "ESP": ["Negative (-)", "Positive (+)"]
    },
    "variant2": {
      "HTR270": ["Negative (-)", "Positive (+)"],
      "HTR400": ["Negative (-)", "Positive (+)"],
      "RED400": ["RE Stainless", "RE Composite"],
      "RED600": ["RE Composite"]
    },
    "variant3": {
      "HTR270": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "HTR400": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "RED400": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "RED600": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "RER": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "IRM": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "WHIMS": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "RTF": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"],
      "ESP": ["400V / 3P", "480V / 3P", "525V / 3P", "Other"]
    },
    "variant4": {
      "HTR270": ["50Hz", "60Hz"],
      "HTR400": ["50Hz", "60Hz"],
      "RED400": ["50Hz", "60Hz"],
      "RED600": ["50Hz", "60Hz"],
      "RER": ["50Hz", "60Hz"],
      "IRM": ["50Hz", "60Hz"],
      "WHIMS": ["50Hz", "60Hz"],
      "RTF": ["50Hz", "60Hz"],
      "ESP": ["50Hz", "60Hz"]
    }
  }
};