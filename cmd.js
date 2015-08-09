#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('regex-adventure')

var lessons = [
  { title: 'LITERALLY', file: './problems/literally' },
  { title: 'ANCHOR START', file: './problems/anchor_start' },
  { title: 'ANCHOR END', file: './problems/anchor_end' },
  { title: 'CHARACTER CLASS', file: './problems/char_classy' },
  { title: 'DIGI TEST', file: './problems/digi_test' },
  { title: 'GROUP MATCH', file: './problems/group_match' }
]
lessons.forEach(function (lesson) {
  shop.add(lesson.title, function () { return require(lesson.file) })
})
shop.execute(process.argv.slice(2))
