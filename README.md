# gxssdk（公信宝sdk） for Nodejs

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