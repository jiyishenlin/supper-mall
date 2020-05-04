import {request} from "./request";

export function getGoodDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class GoodInfo{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class shopInfo{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
  }
}

export class shopImages {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.items = detailInfo.detailImage[0].list
  }
}
export class itemParams {
  constructor(itemParams) {
    this.infoKey = itemParams.info.key
    this.infoSet = itemParams.info.set
    this.ruleDisclaimer = itemParams.rule.disclaimer
    this.ruleKey = itemParams.rule.key
    this.ruleTables = itemParams.rule.tables
  }
}

export class rateInfo {
  constructor(rateInfo) {
    this.list = rateInfo.list
  }
}
