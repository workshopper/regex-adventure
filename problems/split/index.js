var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(5)
  var f = require(path.resolve(args[0]))
  t.deepEqual(f('1,2,3'), ['1','2','3'], '1,2,3')
  t.deepEqual(f('4, 5, 6, 7'), ['4','5','6','7'], '4, 5, 6, 7')
  t.deepEqual(f('1337'), ['1337'], '1337')
  t.deepEqual(f('a,\nb,\nc,\nd'), ['a','b','c','d'], 'a,\\nb,\\nc,\\nd')
  t.deepEqual(
    f('q\r\n  ,\r\n  r\r\n  ,\r\n  s'),
    ['q','r','s'],
    'q\\r\\n  ,\\r\\n  r\\r\\n  ,\\r\\n  s'
  )
})
