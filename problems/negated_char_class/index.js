var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(7)
  var f = require(path.resolve(args[0]))
  t.notOk(f('1A'), '1A')
  t.ok(f('A1'), 'A1')
  t.notOk(f('ABC'), 'ABC')
  t.ok(f('abc'), 'abc')
  t.notOk(f('555'), '555')
  t.notOk(f('5z'), '5z')
  t.ok(f('...'), '...')
})
