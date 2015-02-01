// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './home/*.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  }
}
