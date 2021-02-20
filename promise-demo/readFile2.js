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

//  使用promise依次读取文件
readFileContent('a.json').then((aData) => {
  console.log(aData)
  return readFileContent(aData.next)
}).then((bData) => {
  console.log(bData)
  return readFileContent(bData.next)
}).then((cData) => {
  console.log(cData)
})

