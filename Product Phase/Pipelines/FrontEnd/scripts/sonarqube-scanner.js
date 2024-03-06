const scanner = require("sonarqube-scanner");
scanner(
  {
    // serverUrl: "http://52.7.203.73:9000",
    options: {
      // "sonar.token": "squ_6a390ad9a90724d0b742cb5420397c5d043dd3a6",
      "sonar.sources": "./src",
      "sonar.exclusions": "**/__tests__/**, src/reportWebVitals.js, src/setupTests.js, **/src/Components/AdminProductEdit/**/*, **/src/Components/ProductDetail/**/*, **/src/Components/Review/**/*, **/src/Components/UserProfile/**/*, **/src/scripts/*, **/src/*, **/src/Components/*, **/src/Components/ProductDisplay/ProductDisplay.js, **/src/Components/SearchPage/Search.js",
      "sonar.tests": "./src/__tests__",
      "sonar.test.inclusions": "./src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml"
    },
  },
  () => process.exit()
);