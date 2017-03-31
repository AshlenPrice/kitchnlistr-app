'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onIndexKitchens = function (event) {
  event.preventDefault()
  api.indexKitchens()
  .then(ui.indexKitchensSuccess)
    .catch(ui.indexError)
}

const onIndexKitchensSignedIn = function (event) {
  event.preventDefault()
  // const data = event
  api.indexKitchensSignedIn()
    .then(ui.indexKitchensSignedIn)
    .catch(ui.indexError)
}

const onCreateKitchen = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createKitchen(data)
  .then((response) => {
    store.kitchen = response.kitchen
    ui.createSuccess(response.kitchen)
  })
  .then(api.indexKitchensSignedIn)
  .then(ui.indexKitchensSignedIn)
  .catch(ui.createError)
}

const onShowKitchen = function (event) {
  event.preventDefault()
  const kitchenId = $('#kitchen-id').val()
  if (kitchenId.length === 0) {
  } else {
    api.showKitchen(kitchenId)
    .then(ui.showKitchenSuccess)
    .catch(ui.showError)
  }
}

const onDeleteKitchen = function (event) {
  event.preventDefault()
  api.destroyKitchen($(this).data('id'))
    .then(ui.deleteSuccess)
    .then(api.indexKitchensSignedIn)
    .then(ui.indexKitchensSignedIn)
    .catch(ui.error)
}

const onUpdateKitchen = function (event) {
  event.preventDefault()
  const info = getFormFields(event.target)
  api.updateKitchen(info, $(this).data('id'))
      .then(ui.updateSuccess)
      .then(api.indexKitchensSignedIn)
      .then(ui.indexKitchensSignedIn)
      .catch(ui.error)
}

const addHandlers = () => {
  $('#kitchens-btn').on('click', onIndexKitchens)
  $('.kitchen-render').on('submit', '.create-kitchen', onCreateKitchen)
  $('.kitchens').on('submit', '.submit-kitchen-update', onUpdateKitchen)
  $('.kitchens').on('click', '.remove-kitchen', onDeleteKitchen)
  $('.kitchen-render').on('click', '.sign-in-show', onIndexKitchensSignedIn)
}

module.exports = {
  addHandlers,
  onIndexKitchens,
  onIndexKitchensSignedIn,
  onCreateKitchen,
  onDeleteKitchen,
  onUpdateKitchen,
  onShowKitchen
}
