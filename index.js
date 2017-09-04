const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
	require('child_process').spawn('sh', ['off.sh'], {stdio: 'inherit'});
})

app.listen(4000, function () {
  console.log('Lightswitch off listening on port 4000!')
})

