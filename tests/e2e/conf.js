// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec.js'
    , './authentication/*.spec.js'
    , './home/*.spec.js'
    , './media/*.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl : 'http://learningabouttesting:3000'
}
