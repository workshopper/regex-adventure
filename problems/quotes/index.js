var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(3)
  var f = require(path.resolve(args[0]))
  t.deepEqual(
    f('one "two three four" five six "seven eight" nine'),
    ['"two three four"','"seven eight"'],
    'one "two three four" five six "seven eight" nine'
  )
  t.deepEqual(
    f('"beep boop" whatever "tacos" eleven "eighty"'),
    ['"beep boop"','"tacos"','"eighty"'],
    '"beep boop" whatever "tacos" eleven "eighty"'
  )
  t.deepEqual(f('empty ""'), ['""'], 'empty ""')
})
