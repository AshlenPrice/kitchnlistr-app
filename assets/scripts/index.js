'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const kitchenEvents = require('./kitchens/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  kitchenEvents.addHandlers()
  $('.log').on('submit', '.submit-kitchen-update', kitchenEvents.onUpdateKitchen)
  $('.log').on('click', '.remove-kitchen', kitchenEvents.onDeleteKitchen)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
