var fs = require('fs')
var path = require('path')

fs.readFile(path.resolve(__dirname, 'json-files', 'a.json'), (err, data) => {
  if (err) {
    console.error(err)
  }
  var aData = JSON.parse(data.toString())
  console.log(aData);
  
  fs.readFile(path.resolve(__dirname, 'json-files', aData.next), (err, data) => {
    if (err) {
      console.error(err)
    }
    var bData = JSON.parse(data.toString())
    console.log(bData);
    
    fs.readFile(path.resolve(__dirname, 'json-files', bData.next), (err, data) => {
      if (err) {
        console.error(err)
      }
      var cData = JSON.parse(data.toString())
      console.log(cData);
      
    })
  })
})

