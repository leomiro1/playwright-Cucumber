const reporter = require("cucumber-html-reporter")

const options ={
     theme:'bootstrap',
     jsonFile:'report/report.json',
     output:'report/cucumber-html-report.html',
     overwrite: true,
     reportSuiteAsScenaros:true,
     launchReport:true,
}
reporter.generate(options)