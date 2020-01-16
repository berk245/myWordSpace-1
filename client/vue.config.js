const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      },
      "/login": {
        target: "http://localhost:5000"
      },
      "/signup": {
        target: "http://localhost:5000"
      },
      "/edit": {
        target: "http://localhost:5000"
      },
      "/delete": {
        target: "http://localhost:5000"
      },
      "/add-notebook": {
        target: "http://localhost:5000"
      },
      "/exercise": {
        target: "http://localhost:5000"
      }
    }
  }
};
