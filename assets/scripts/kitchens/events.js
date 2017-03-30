'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onIndexKitchens = function (event) {
  console.log('working?')
  event.preventDefault()
  api.indexKitchens()
  .then(ui.indexKitchensSuccess)
    .catch(ui.indexError)
}

// const onIndexKitchensSignedIn = function (event) {
//   event.preventDefault()
//   const data = event
//   api.indexKitchensSignedIn(data)
//     .then(ui.indexKitchensSignedIn)
//     .catch(ui.indexError)
// }

const onCreateKitchen = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // api.createKitchen(data)
  // .then((response) => {
  //   store.kitchen = response.kitchen
  //   ui.createSuccess(response.kitchen)
  // }).catch(ui.createError)
}

const onShowKitchen = function (event) {
  event.preventDefault()
  console.log("ANYTHING")
  const kitchenId = $('#kitchen-id').val()
  if (kitchenId.length === 0) {
    console.log('No ID')
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
    .catch(ui.error)
}

const onUpdateKitchen = function (event) {
  event.preventDefault()
  const info = getFormFields(event.target)
  api.updateKitchen(info, $(this).data('id'))
      .then(ui.updateSuccess)
      .catch(ui.error)
}

const addHandlers = () => {
  $('#kitchens-btn').on('click', onIndexKitchens)
  $('.log').on('submit', '.submit-kitchen-update', onUpdateKitchen)
  $('.kitchen-render').on('submit', '.create-kitchen', onCreateKitchen)
  $('#update-kitchen').on('submit', onUpdateKitchen)
  $('.delete-kitchen').on('submit', onDeleteKitchen)
}

module.exports = {
  addHandlers,
  onIndexKitchens,
  // onIndexKitchensSignedIn,
  onCreateKitchen,
  onDeleteKitchen,
  onUpdateKitchen,
  onShowKitchen
}
