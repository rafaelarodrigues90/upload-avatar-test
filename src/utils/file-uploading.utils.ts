import { UnsupportedMediaTypeException } from "@nestjs/common"
import { extname } from "path"

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new UnsupportedMediaTypeException('Only image files are allowed!'), false)
    }
    callback(null, true)
}

export const editFileName = (req, file, callback) => {
    const fileExtName = extname(file.originalname)
    const newFileName = 'avatar-profile'

    callback(null, `${newFileName}${fileExtName}`)
}