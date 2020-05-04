
//防抖操作，刷新函数频繁执行，为减少执行的次数
export function debounce(func,delay){
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
