import requestNet from './network.js'

export function getMultiData(){
  return requestNet({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page){
  return requestNet({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}