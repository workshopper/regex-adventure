var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(6)
  var f = require(path.resolve(args[0]))
  t.ok(f("THIS SHIITAKE IS BANANAS"), "THIS SHIITAKE IS BANANAS")
  t.ok(f("BANANAS"), "BANANAS")
  t.notOk(f("BANANAS ARE GREEN OR YELLOW"), "BANANAS ARE GREEN OR YELLOW")
  t.notOk(f("NOTHING"), "NOTHING")
  t.notOk(f("EVERYTHING IS BANANAS."), "EVERYTHING IS BANANAS.")
  t.ok(f("EVERYTHING IS BANANAS"), "EVERYTHING IS BANANAS")
})
