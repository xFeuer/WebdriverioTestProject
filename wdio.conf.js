import allureCommandline from 'allure-commandline'

export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'firefox',
    acceptInsecureCerts: true,
    'moz:firefoxOptions': {
      args: ['-headless'],
    },
  }],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: [
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  services: ['geckodriver'],
  onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allureCommandline(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
      })
    })
  },
}
