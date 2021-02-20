var fs = require('fs')
var path = require('path')

function readFileContent(filename, callback) {
  fs.readFile(path.resolve(__dirname, 'json-files', filename), (err, data) => {
    if (err) {
      console.error(err)
    }
    callback(JSON.parse(data.toString()))
  })
}

// 使用回调函数依次读取文件
readFileContent('a.json', (aData) => {
  console.log(aData);
  readFileContent(aData.next, (bData) => {
    console.log(bData);
    readFileContent(bData.next, (cData) => {
      console.log(cData);
    })
  })
})

/**
 * 问题：什么是回调函数
 * 我们在调用异步api的时候，所执行的异步任务并不知道什么时候能执行完，
 * 所以就预先写好一个函数，等着异步任务执行完后回调这个函数，
 * 异步任务的结果就会作为该函数的参数，该函数的逻辑就是处理异步结果，拿到我们需要的信息。
 */

/**
 * 回调函数的缺点
 * 1. 不能使用 try-catch 捕获错误
 * 2. 不能直接 reutrn
 */
