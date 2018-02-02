module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      }
    }
  },
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ]
  },
  overrides: [
    {
        files: "*.spec.js",
        rules: {
            "no-unused-expressions": "off"
        }
    }
]
};
