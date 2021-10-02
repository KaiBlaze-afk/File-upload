const express = require('express')
const upload = require('express-fileupload')
const app = express()

app.use(upload())

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.use(express.static('uploads'))


app.post('/',(req, res) => {
    if (req.files){
        var file = req.files.file
        var filename = file.name
        console.log(filename)
        file.mv('./uploads/'+filename, function (err){
            if(err){
                res.send(err)
            }else{
                res.sendFile(__dirname+'/uploads/'+filename)
            }
        })
    }
})

app.listen(5000)