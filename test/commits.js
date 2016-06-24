const expect = require("expect")
const CommitList = require("../index.js").CommitList

expect(CommitList.getInitialState()).toEqual({ data: [] })
