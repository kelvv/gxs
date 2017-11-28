const webHandler = require('../../utils/webHandler')
const Regex = require('regexper.js')

/**
 * Expose the BusinessAPI object
 */

module.exports = {
  /**
   * GetNews 获取新闻列表
   */
  GetNews: async () => {
    let result = []
    let html = await webHandler.Get('https://www.gxb.io', '', false)
    let regex = new Regex('<li><a [\\s\\S]+?\\s*href="([^"]+)"[\\s\\S]+?>([^<]+)[\\s\\S]+?(\\d+-\\d+-\\d+)', 'ig')
    let newMatches = regex.matches(html)
    for (let match of newMatches) {
      result.push({
        title: match.groups[2],
        content_url: match.groups[1],
        dateTime: match.groups[3]
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
