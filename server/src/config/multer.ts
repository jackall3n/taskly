import * as multer from 'multer';
import * as path from "path";
import * as crypto from "crypto";

const storage = multer.diskStorage({
    destination: '/test',
    filename: function (request, file, callback) {
        crypto.pseudoRandomBytes(16, function (error, raw) {
            if (error) {
                return callback(error, undefined);
            }

            const file_name = raw.toString('hex') + path.extname(file.originalname);

            callback(null, file_name)
        })
    }
});

export default multer({storage: storage});