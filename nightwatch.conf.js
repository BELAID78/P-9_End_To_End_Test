module.exports = {
    src_folders: ["./tests"],
    page_objects_path: ['node_modules/nightwatch/examples/pages/'],
    custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
    custom_assertions_path: '',
    plugins: [],
    globals_path : '',
    webdriver: {},
    test_settings: {
      default: {
        disable_error_log: false,
        launch_url: 'http://127.0.0.1:5500',
        screenshots: {
          enabled: false,
          path: 'screens',
          on_failure: true
        },
        desiredCapabilities: {
          browserName : 'chrome'
        },
        webdriver: {
          start_process: true,
          server_path: ''
        }
      },
      selenium_server: {
        selenium: {
          start_process: true,
          port: 4444,
          server_path: '/bin/selenium-server-4.4.0.jar',
          command: 'standalone',
          cli_args: {
            'webdriver.chrome.driver': './bin/chromedriver.exe'
          }
        },
        webdriver: {
          start_process: false,
          default_path_prefix: '/wd/hub'
        }
      },
      'selenium.chrome': {
        extends: 'selenium_server',
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions : {
            w3c: true,
            args: [
              "window-size=1680,1050"
            ]
          }
        }
      }
    }
  };