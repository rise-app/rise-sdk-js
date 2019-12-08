import './integration/browser.test.js'

mocha.checkLeaks()
mocha.globals(['rise'])
mocha.run()
