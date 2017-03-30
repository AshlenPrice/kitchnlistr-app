const showKitchenTemplate = require('../templates/kitchens.handlebars')
const showKitchenAuth = require('../templates/authKitchens.handlebars')

const indexKitchensSuccess = function (data) {
  const showKitchensHtml = showKitchenTemplate({kitchens: data.kitchens})
  $('.kitchens').html(showKitchensHtml)
}

const indexError = function () {
  alertify.error('Something went wrong')
}

// const indexKitchensSignedIn = function (data) {
//   if (data.kitchens.length === 0) {
//   alertify.error("You don't have any kitchen listings!")
//   }
//   const showKitchensAuthHtml = showKitchenAuth({kitchens: data.kitchens})
//   $('.kitchens').html(showKitchensAuthHtml)
// }

const createSuccess = function () {
  alertify.success('Listing Successfully Created!')
  $('.sign-in-show').click()
  $('.kapat').modal('hide')
  $('input, textarea').val('')
}
const createError = function () {
  alertify.error('Please fill out all the fields!')
}

const showKitchenSuccess = function () {
}

const showError = function () {
}

const error = function () {
}

const updateSuccess = function () {
  alertify.success('Successfully Updated!')
  $('.sign-in-show').click()
  $('.kapat').modal('hide')
  $('input, textarea').val('')
}

const deleteSuccess = function () {
  alertify.success('Blog Successfully Deleted')
  $('.sign-in-show').click()
}

module.exports = {
  indexKitchensSuccess,
  // indexKitchensSignedIn,
  indexError,
  createSuccess,
  createError,
  showKitchenSuccess,
  showError,
  error,
  updateSuccess,
  deleteSuccess
}
