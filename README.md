# gxssdk（公信宝sdk） for Nodejs  

❤️gxs

## 说明
  
  1. 区块链api : 提供区块链查询功能（交易、用户资料、区块信息等）
  2. 商业api  : 提供商业性的查询功能（新闻、合作伙伴等）

  gxssdk会不定时更新、添加功能，请放心使用，有任何疑问和问题，请提issues ~

## 安装
```bash
npm install gxs --save
or 
yarn add gxs
```

## 使用
``` javascript
var gxs = require('gxs');
const BlockAPI = gxs.BlockAPI
const BusinessAPI = gxs.BusinessAPI

async function test () {
  let result = await BusinessAPI.GetNews() //获取新闻列表
  console.log(result)
}

test()

```

## API

约定: 数据均为JSON格式

### BlockAPI

* GetSupply  获取供应量
    
    ```
    /**
     * GetSupply 
    */
    GetSupply = function() 
    
    ```

* GetBlockHeight  区块信息查询
    
    ```
    /**
     * GetBlockHeight
     * @params blockId 区块Id
    */
    GetBlockHeight = function(blockId) 
    
    ```

* GetTransaction  交易查询
    
    ```
    /**
     * GetTransaction
     * @params txId 交易Id
    */
    GetTransaction = function(txId) 
    
    ```

* GetAccount  账号查询
    
    ```
    /**
     * GetAccount
     * @params idOrName 账号的id或者名称
    */
    GetAccount = function(idOrName) 
    
    ```

* GetBalance  余额查询
    
    ```
    /**
     * GetBalance
     * @params idOrName 账号的id或者名称
    */
    GetBalance = function(idOrName) 
    
    ```

* GetUserHeader  账户头像查询
    
    ```
    /**
     * GetUserHeader
     * @params idOrName 账号的id或者名称
    */
    GetUserHeader = function(idOrName) 
    
    ```

### BusinessAPI

* GetNews  获取新闻列表
    
    ```
    /**
     * GetNews 
    */
    GetNews = function() 
    
    ```

* GetPartners  获取合作伙伴列表
    
    ```
    /**
     * GetPartners 
    */
    GetPartners = function() 
    
    ```

