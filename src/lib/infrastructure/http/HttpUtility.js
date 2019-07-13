const http = require('http');
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
}

module.exports = HttpUtility;