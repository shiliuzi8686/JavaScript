const { log } = console;
//待提高
// function deepClone(value){
//     if(!deepClone.cache) deepClone.cache = new Map()
//     const cache = deepClone.cache
//     if(cache.has(value)) return cache.get(value)
//     cache.set(value,value)
//     if(typeof value !== 'object' || value instanceof Function || value === 'null') return value
//     const resultObj = {}
//     const keys = Object.keys(value)
//     keys.forEach( key => {
//         resultObj[key] = deepClone(value[key])
//     })
//     return resultObj
// }
//更好
function deepClone(value){
    //对象进行包装就是它本身
    if(Object(value) !== value || value instanceof Function) return value
    //在deepClone函数上创建一个缓存，记忆已经克隆过的对象(使用WeakSet)
    if(!deepClone.cache) deepClone.cache = new WeakSet()
    if(deepClone.cache.has(value)) return value //克隆过直接返回
    deepClone.cache.add(value)
    //根据它的原型创建一个拷贝 
    const result = Object.create(Object.getPrototypeOf(value))
    Object.keys(value).forEach( key => result[key] = deepClone(value[key]))
    return result
}

// 输入 1
const articles = [
    {
        title: '深拷贝',
        subTitle: '怎么实现深拷贝',
        authorInfo: {
        name: '12',
        id: 123456789,
        },
        content: '深拷贝是指深层的拷贝方式...',
    },
    {
        title: '原型链',
        subTitle: '怎么实现寄生式组合继承',
        authorInfo: {
        name: '12',
        id: 123456789,
        },
        content: '寄生式组合继承是流行的继承方式...',
    },
];

// const articlesCopy = deepClone(articles);
// log(articlesCopy);
// log('articles',articles);

// 输入2：测试循环引用
function CircularReferedObj() {
    this.info = 'foo';
    this.circular = this;
  }
  
  const circularReferedObj = new CircularReferedObj();
  log(circularReferedObj.circular.circular.circular.circular.info);
  
  const circularReferedObjCopy = deepClone(circularReferedObj);
  log(circularReferedObjCopy);