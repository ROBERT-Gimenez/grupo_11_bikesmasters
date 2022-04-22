const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/profile'))
    },
    filename: (req, file, cb) => {
        let newFile = `${Date.now()}-profile${path.extname(file.originalname)}`;
        cb(null, newFile)
    }
})

const upload = multer({storage})

module.exports = upload