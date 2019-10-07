var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')
var parse = require('node-html-parser').parse
//simple method for post data
// app.get('/index.html', function (req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// })
// app.get('/process_get', function (req, res) {
//     // Prepare output in JSON format
//     response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     arr.push(JSON.stringify(response))
//     console.log(arr);
//     res.end(`<a href="/index.html">back</a>`);
// })


// this method dont send send value in url
// app.get('/index.html', function (req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// })

// app.post('/process_get', urlencodedParser, function (req, res) {
//     // Prepare output in JSON format
//     response = {
//         firstname: req.body.first_name,
//         lastname: req.body.last_name
//     };
//     arr.push(response)
//     console.log('your data send');
//     res.end(`<a href="/viewList.html">viewlist</a>`);
// })
// app.get('/viewList.html', function (req, res) {
//     if (arr.length) {
//         console.log(arr)
//         fs.readFile('viewList.html', function (err, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             for(var i = 0 ;i < arr.length;i++){
//                 res.write(`<li>${arr[i].firstname}</li>`);
//             }
//             res.end();
//         });
//     }
//     //   res.sendFile(__dirname + "/" + "viewList.html");
// })
// var text = document.getElementById('p').inn+= 'Hello content!'
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
var arr = [];
app.route('/index.html').get((req, res) => {
    console.log(true)
    if (res) {
        res.send(arr)
        res.end()
        console.log('req')
    }
}).post(urlencodedParser, function (req, res) {
    response = {
        firstname: req.body.first_name,
        lastname: req.body.last_name
    };
    arr.push(response)
})
app.route('/index2').get((req, res) => {
    if (res) {
        res.send(arr)
        res.end()
    } else {
        console.log('error for  /index2res')
    }
})
app.route('/delete').get((req, res) => {
    if (res) {
        arr.splice(req.query.index, 1)
        res.send(arr)
        res.end()
    } else {

        console.log('error for  /index2res')
    
    }
})

app.route('/edit').get((req, res) => {
    if (res) {
        var obj = {
            firstname: req.query.firstname,
            lastname: req.query.lastname
        }
        console.log(req.query)
        arr.splice(req.query.index, 1, obj)
        res.send(arr)
        res.end()
    } else {
        console.log('error for  /index2res')
    }
})


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})