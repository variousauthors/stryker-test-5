module.exports = function(config) {
  config.set({
    files: [
      { pattern: "src/**/*.js", mutated: true, included: false },
      "!src/**/*.test.js",
      "src/**/**/*",
    ],
    testRunner: "jest",
    mutator: "javascript",
    transpilers: ["webpack"],
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "off",
    jest: {
      project: 'react'
    },
    logLevel: 'debug'
  });
};
