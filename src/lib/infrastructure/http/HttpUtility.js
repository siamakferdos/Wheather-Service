const http = require('http');
const https = require('https');
const fs = require('fs');
class HttpUtility{
    downloadFile(url, filePath) {
        var file = fs.createWriteStream(filePath);
        return new Promise(function (resolve, reject) {
            try {
                http.get(url, function (res) {
                    res.pipe(file);
                    file.on('finish', function () {
                        file.end();
                        resolve();
                    });
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    callGetMethodApi(url){
        return new Promise(function (resolve, reject) {
            try {
                https.get(url, function (res) {   
                    var body = '';

                    res.on('data', function(chunk){
                        body += chunk;
                    });

                    res.on('end', function(){
                        var jsonData = JSON.parse(body);
                        return resolve(jsonData);
                        
                    });                                     
                });
            } catch (err) {
                reject(err);
            }
        });
    }
}

module.exports = HttpUtility;