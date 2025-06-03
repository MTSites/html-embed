const MODEL_DATA = {
  "models": {
    "ESP": [
      "ESP 2x5",
      "ESP 1x5"
    ],
    "HTR270": [
      "HTR270 1x2",
      "HTR270 1x3",
      "HTR270 2x2",
      "HTR270 2x3"
    ],
    "HTR400": [
      "HTR400 2x3",
      "HTR400 2x2",
      "HTR400 4x1",
      "HTR400 1x3",
      "HTR400 1x2"
    ],
    "IRM": [
      "IRM 760x133",
      "IRM 1000x160"
    ],
    "RED400": [],
    "RED600": [],
    "RER": [
      "RER 1x3x1000",
      "RER 1x2x1000",
      "RER 1x1x1000",
      "RER 1x3x1500",
      "RER 1x2x1500",
      "RER 1x1x1500"
    ],
    "RTF": [],
    "UCC": [
      "UCC 600x600",
      "UCC 900x900",
      "UCC 1200x1200",
      "UCC 1800x1800",
      "UCC 1200x2400"
    ],
    "WHIMS": [
      "WHIMS 16Px68x2P",
      "WHIMS 16Px68x3P",
      "WHIMS 16Px120x2P",
      "WHIMS 16Px120x3P",
      "WHIMS 16Px200x2P",
      "WHIMS 16Px200x3P"
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
      "ESP 2x5": [
        "Positive (+)",
        "Negative (-)"
      ],
      "ESP 1x5": [
        "Positive (+)",
        "Negative (-)"
      ],
      "HTR270 1x2": [
        "GLASS COMPOSITE",
        "GLASSLESS"
      ],
      "HTR270 1x3": [
        "GLASS COMPOSITE",
        "GLASSLESS"
      ],
      "HTR270 2x2": [
        "GLASS COMPOSITE",
        "GLASSLESS"
      ],
      "HTR270 2x3": [
        "GLASS COMPOSITE",
        "GLASSLESS"
      ],
      "HTR400 2x3": [
        "Glassless",
        "Glass Composite"
      ],
      "HTR400 2x2": [
        "Glassless",
        "Glass Composite"
      ],
      "HTR400 4x1": [
        "Glassless",
        "Glass Composite"
      ],
      "HTR400 1x3": [
        "Glassless",
        "Glass Composite"
      ],
      "HTR400 1x2": [
        "Glassless",
        "Glass Composite"
      ],
      "IRM 760x133": [
        "Non-Mags"
      ],
      "IRM 1000x160": [
        "Non-Mags"
      ],
      "RER 1x3x1000": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "RER 1x2x1000": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "RER 1x1x1000": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "RER 1x3x1500": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "RER 1x2x1500": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "RER 1x1x1500": [
        "4x2",
        "3x1",
        "6x1.5"
      ],
      "UCC 600x600": [],
      "UCC 900x900": [],
      "UCC 1200x1200": [],
      "UCC 1800x1800": [],
      "UCC 1200x2400": [],
      "WHIMS 16Px68x2P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ],
      "WHIMS 16Px68x3P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ],
      "WHIMS 16Px120x2P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ],
      "WHIMS 16Px120x3P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ],
      "WHIMS 16Px200x2P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ],
      "WHIMS 16Px200x3P": [
        "HE Air Cooled ",
        "HE Water Cooled"
      ]
    },
    "variant2": {
      "ESP 2x5": [],
      "ESP 1x5": [],
      "HTR270 1x2": [
        "Positive (+)",
        "Negative (-)"
      ],
      "HTR270 1x3": [
        "Positive (+)",
        "Negative (-)"
      ],
      "HTR270 2x2": [
        "Positive (+)",
        "Negative (-)"
      ],
      "HTR270 2x3": [
        "Positive (+)",
        "Negative (-)"
      ],
      "HTR400 2x3": [
        "Negative (-)",
        "Positive (+)"
      ],
      "HTR400 2x2": [
        "Negative (-)",
        "Positive (+)"
      ],
      "HTR400 4x1": [
        "Negative (-)",
        "Positive (+)"
      ],
      "HTR400 1x3": [
        "Negative (-)",
        "Positive (+)"
      ],
      "HTR400 1x2": [
        "Negative (-)",
        "Positive (+)"
      ],
      "IRM 760x133": [],
      "IRM 1000x160": [],
      "RER 1x3x1000": [],
      "RER 1x2x1000": [],
      "RER 1x1x1000": [],
      "RER 1x3x1500": [],
      "RER 1x2x1500": [],
      "RER 1x1x1500": [],
      "UCC 600x600": [],
      "UCC 900x900": [],
      "UCC 1200x1200": [],
      "UCC 1800x1800": [],
      "UCC 1200x2400": [],
      "WHIMS 16Px68x2P": [],
      "WHIMS 16Px68x3P": [],
      "WHIMS 16Px120x2P": [],
      "WHIMS 16Px120x3P": [],
      "WHIMS 16Px200x2P": [],
      "WHIMS 16Px200x3P": []
    },
    "variant3": {
      "ESP 2x5": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "ESP 1x5": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR270 1x2": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR270 1x3": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR270 2x2": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR270 2x3": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR400 2x3": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR400 2x2": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR400 4x1": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR400 1x3": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "HTR400 1x2": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "IRM 760x133": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "IRM 1000x160": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x3x1000": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x2x1000": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x1x1000": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x3x1500": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x2x1500": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "RER 1x1x1500": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "UCC 600x600": [],
      "UCC 900x900": [],
      "UCC 1200x1200": [],
      "UCC 1800x1800": [],
      "UCC 1200x2400": [],
      "WHIMS 16Px68x2P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "WHIMS 16Px68x3P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "WHIMS 16Px120x2P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "WHIMS 16Px120x3P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "WHIMS 16Px200x2P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ],
      "WHIMS 16Px200x3P": [
        "400V / 3P / 50Hz",
        "480V / 3P / 50Hz",
        "525V / 3P / 50Hz",
        "Additional Information"
      ]
    }
  }
};