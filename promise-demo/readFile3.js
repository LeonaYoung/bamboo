var fs = require('fs')
var path = require('path')

function readFileContent(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, 'json-files', filename), (err, data) => {
      if (err) {
        console.error(err)
      }
      resolve(JSON.parse(data.toString()))
    })
  })
}

async function printFileContent() {
  var aData = await readFileContent('a.json')
  console.log(aData)
  var bData = await readFileContent(aData.next)
  console.log(bData)
  var cData = await readFileContent(bData.next)
  console.log(cData)
}

printFileContent()

// async await 要点：
// 1. await 后面可以追加 promise 对象，获取 resolve 的值
// 2. await 必须包裹在 async 函数里面
// 3. async 函数执行返回的也是一个 promise 对象
// 4. try-catch 截获 promise 中 reject 的值

/**
 * await 缺点
 * await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低
 */

