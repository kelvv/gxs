const webHandler = require('../../utils/webHandler')

/**
 * Expose the BlockAPI object
 */

module.exports = {
  /**
   * GetSupply 供应量查询
   */
  GetSupply: async () => {
    let result = await webHandler.Get('http://block.gxb.io/api/supply')
    return result
  },
  /**
   * GetSupply 供应量查询
   *
   * @params blockId 区块Id
   */
  GetBlockHeight: async (blockId) => {
    let result = await webHandler.Get(`http://block.gxb.io/api/block/${blockId}`)
    return result
  },
  /**
   * GetSupply 交易查询
   *
   * @params txId 交易Id
   */
  GetTransaction: async (txId) => {
    let result = await webHandler.Get(`http://block.gxb.io/api/transaction/${txId}`)
    return result
  },
  /**
   * GetSupply 账号查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetAccount: async (idOrName) => {
    let result = await webHandler.Get(`http://block.gxb.io/api/account/${idOrName}`)
    return result
  },
  /**
   * GetBalance 余额查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetBalance: async (idOrName) => {
    let result = await webHandler.Get(`http://block.gxb.io/api/account_balance/${idOrName}`)
    return result
  },
  /**
   * GetUserHeader 账户头像查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetUserHeader: async (idOrName) => {
    return {
      url: `http://block.gxb.io/api/header/${idOrName}`
    }
  }
}
