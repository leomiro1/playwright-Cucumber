const common = `
  --require runner/hooks.js 
  --require features/support/steps.js
  --require report.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};