const webHandler = require('../../utils/webHandler')
const Regex = require('regexper.js')

/**
 * Expose the BusinessAPI object
 */

module.exports = {
  /**
   * GetNews
   */
  GetNews: async () => {
    let result = []
    let html = await webHandler.Get('https://mp.weixin.qq.com/profile?src=3&timestamp=1511797048&ver=1&signature=Nk5EMiMal98FtZ8WwPdsEvKf1Pr4ft0QNyVihFoLjp2vmzQTD1yYCGrOx1MH34Ob9L5wpMZe9hUmbFr8prRP5A==', '', false)
    let regex = new Regex('content_url":"([^"]+)[\\s\\S]+?cover":"([^"]+)[\\s\\S]+?digest":"([^"]+)[\\s\\S]+?title":"([^"]+)[\\s\\S]+?datetime":(\\d+)', 'ig')
    let newMatches = regex.matches(html)
    for (let match of newMatches) {
      result.push({
        title: match.groups[4],
        digest: match.groups[3],
        cover: match.groups[2],
        content_url: `https://mp.weixin.qq.com${match.groups[1]}`,
        dateTime: match.groups[5]
      })
    }
    return result
  },
  /**
   * GetPartners 获取合作伙伴列表
   */
  GetPartners: async () => {
    let result = []
    let html = await webHandler.Get('https://www.gxb.io/', '', false)
    let regex = new Regex('<li>\\s*([^<]+)\\s*<\\/li>', 'ig')
    let partnersMatches = regex.matches(html)
    for (let match of partnersMatches) {
      result.push(match.groups[1])
    }
    return result
  }
}
