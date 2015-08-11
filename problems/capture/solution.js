// Here is the reference solution:

  module.exports = function (str) {
    var m = /x=(\d+)/.exec(str)
    return m ? m[1] : null
  }
