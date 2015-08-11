// Here is the reference solution:

  module.exports = function (str) {
    var m = /\bx=(\d+)\b/.exec(str)
    return m ? m[1] : null
  }
