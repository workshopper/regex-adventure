var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(6)
  var f = require(path.resolve(args[0]))
  t.ok(f('cat5'), 'cat5')
  t.ok(f('dog5000'), 'dog5000')
  t.ok(f('robot10'), 'robot10')
  t.notOk(f('xrobot10'), 'xrobot10')
  t.notOk(f('robot'), 'robot')
  t.notOk(f('robot1000f'), 'robot1000f')
})
