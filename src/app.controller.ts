import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from './utils/file-uploading.utils';
import { diskStorage } from 'multer'

@Controller()
export class AppController {
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './file',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter
  }))
  async UploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename
    }
    return response
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: 'file' })
  }
}
