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

