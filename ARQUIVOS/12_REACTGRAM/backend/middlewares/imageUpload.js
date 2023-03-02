const multer = require("multer")
const path = require("path")

// Destination to store image
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = ""

        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cd(null, `uploads/${folder}/`)
    },
    filename: (req, res, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg formats
            return cd(new Erro('Por favor, evie apenas png ou jpg!'))
        }
        cb(undefined, true)
    }
})

module.exports = { imageUpload };