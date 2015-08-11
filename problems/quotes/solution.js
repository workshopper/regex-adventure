// Here is the reference solution:

  module.exports = function (str) {
    return str.match(/"[^"]*"/g)
  }
