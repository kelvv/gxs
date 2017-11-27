const BlockAPI = require('../lib').BlockAPI
async function test () {
  let result = await BlockAPI.GetUserHeader('jarvin1')
  console.log(result)
}

test()
