'use strict'
const config = require('../config')
const store = require('../store')

const createKitchen = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/kitchens',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data
  })
}

const indexKitchens = function () {
  return $.ajax({
    url: config.apiOrigin + '/kitchens',
    method: 'GET'
  })
}

// const indexKitchensSignedIn = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/kitchens',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'GET'
//   })
// }

const showKitchen = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/kitchens/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const destroyKitchen = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/kitchens/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updateKitchen = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/kitchens/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  indexKitchens,
  createKitchen,
  showKitchen,
  destroyKitchen,
  updateKitchen
  // indexKitchensSignedIn

}
