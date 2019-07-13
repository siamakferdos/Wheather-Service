var zlib = require('zlib');
const fs = require('fs');
class FileUtility{
    gunzipFile(gzfilePath, unzippedFilePath) {
        const gzip = zlib.createGunzip();
        const inp = fs.createReadStream(gzfilePath);
        const out = fs.createWriteStream(unzippedFilePath);
        inp.pipe(gzip).pipe(out);
    }  
}

module.exports = FileUtility;