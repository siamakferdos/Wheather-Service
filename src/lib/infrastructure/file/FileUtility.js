var zlib = require('zlib');
const fs = require('fs');
class FileUtility {
    gunzipFile(gzfilePath, unzippedFilePath) {
        const gzip = zlib.createGunzip();
        const inp = fs.createReadStream(gzfilePath);
        const out = fs.createWriteStream(unzippedFilePath);
        inp.pipe(gzip).pipe(out);
    }

    deleteFile(filePath) {
        fs.unlinkSync(filePath);
    }

    isFileExist(filePath) {
        return fs.existsSync(filePath);
    }

    getJsonFileContent(jsonFilePath) {
        let rawdata = fs.readFileSync(jsonFilePath);
        return JSON.parse(rawdata);
    }
}

module.exports = FileUtility;