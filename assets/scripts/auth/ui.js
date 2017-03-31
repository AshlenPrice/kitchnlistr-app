'use strict'
const signedInKitchens = require('../templates/kitchensCrud.handlebars')
const kitchenEvents = require('../kitchens/events.js')
const success = () => {
  alertify.success('Action Successful')
}

const signUpSuccess = () => {
  alertify.success('Account Created!')
  $('#sign-up')[0].reset()
  $('#signUpModal').modal('hide')
}

const signUpFail = () => {
  alertify.error('There Seems To Be An Error. Try Again!')
  $('#sign-up')[0].reset()
}

const signInFail = () => {
  alertify.error('There Seems To Be An Error. Try Again!')
  $('#sign-in')[0].reset()
}

const changePwSuccess = () => {
  alertify.success('Password Successfully Changed!')
  $('#change-password')[0].reset()
  $('#changePwModal').modal('hide')
}

const changePwFail = (data) => {
  alertify.error("Something's not Right! Try Again!")
  $('#change-password')[0].reset()
}

const failure = () => {
  alertify.error('There Seems To Be An Error. Try Again!')
}

const signInSuccess = () => {
  alertify.success('Sign-in Succesful!')
  $('#sign-in')[0].reset()
  $('#signInModal').modal('hide')
  $('#signUpButton').addClass('hidden')
  $('#signInButton').addClass('hidden')
  $('#changePwButton').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.kitchen-render').html(signedInKitchens)
  $('.kitchens').html('')
}

const signOutSuccess = () => {
  alertify.success('Success Signed Out!')
  $('#signUpButton').removeClass('hidden')
  $('#signInButton').removeClass('hidden')
  $('#changePwButton').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('.kitchens').html('')
  $('.kitchen-render').html('')
}

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePwFail,
  changePwSuccess,
  signOutSuccess
}
