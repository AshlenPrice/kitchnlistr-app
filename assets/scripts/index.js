'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const kitchenEvents = require('./kitchens/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  kitchenEvents.addHandlers()
  $('.modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
