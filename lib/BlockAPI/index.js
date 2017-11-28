'use strict';

var webHandler = require('../../utils/webHandler');

/**
 * Expose the BlockAPI object
 */

module.exports = {
  /**
   * GetSupply 供应量查询
   */
  GetSupply: async function GetSupply() {
    var result = await webHandler.Get('http://block.gxb.io/api/supply');
    return result;
  },
  /**
   * GetBlockHeight 区块信息查询
   *
   * @params blockId 区块Id
   */
  GetBlockHeight: async function GetBlockHeight(blockId) {
    var result = await webHandler.Get('http://block.gxb.io/api/block/' + blockId);
    return result;
  },
  /**
   * GetTransaction 交易查询
   *
   * @params txId 交易Id
   */
  GetTransaction: async function GetTransaction(txId) {
    var result = await webHandler.Get('http://block.gxb.io/api/transaction/' + txId);
    return result;
  },
  /**
   * GetAccount 账号查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetAccount: async function GetAccount(idOrName) {
    var result = await webHandler.Get('http://block.gxb.io/api/account/' + idOrName);
    return result;
  },
  /**
   * GetBalance 余额查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetBalance: async function GetBalance(idOrName) {
    var result = await webHandler.Get('http://block.gxb.io/api/account_balance/' + idOrName);
    return result;
  },
  /**
   * GetUserHeader 账户头像查询
   *
   * @params idOrName 账号的id或者名称
   */
  GetUserHeader: async function GetUserHeader(idOrName) {
    return {
      url: 'http://block.gxb.io/api/header/' + idOrName
    };
  }
};