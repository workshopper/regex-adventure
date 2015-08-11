var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(5)
  var f = require(path.resolve(args[0]))
  t.ok(f('abc.'), 'abc.')
  t.notOk(f('abc'), 'abc')
  t.ok(f('...'), '...')
  t.notOk(f('...x'), '...x')
  t.notOk(f('...\n'), '...\\n')
})
