// const BlockAPI = require('../lib').BlockAPI
// async function test () {
//   let result = await BlockAPI.GetUserHeader('jarvin1')
//   console.log(result)
// }

// test()

const BusinessAPI = require('../lib').BusinessAPI
async function test () {
  let result = await BusinessAPI.GetNews()
  console.log(result)
}

test()
