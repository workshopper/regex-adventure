var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(4)
  var f = require(path.resolve(args[0]))
  t.equal(
    f('@@whatever@@').trim(),
    '<p><blink>whatever</blink></p>',
    '@@whatever@@'
  )
  t.equal(
    f('*abc* @@def@@ __ghi__').trim(),
    '<p><em>abc</em> <blink>def</blink> <strong>ghi</strong></p>',
    '*abc* @@def@@ __ghi__'
  )
  t.equal(
    f('@@**cool**@@').trim(),
    '<p><blink><strong>cool</strong></blink></p>',
    '@@**cool**@@'
  )
  t.equal(
    f('beep @@boop@@ says *the* @@**robot**@@!').trim(),
    '<p>beep <blink>boop</blink> says <em>the</em>'
      + ' <blink><strong>robot</strong></blink>!</p>',
    'beep @@boop@@ says *the* @@**robot**@@!'
  )
})
