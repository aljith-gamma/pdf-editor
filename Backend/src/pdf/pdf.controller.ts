import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PdfService } from "./pdf.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname } from "path";
import { diskStorage } from "multer";


const fileConfig = {
    destination: './uploads/',
    filename: (req, file, cb) => {
      const uniqueSuffix = 'example';
      const fileExt = '.pdf';
      const fileName = uniqueSuffix + fileExt;
      cb(null, fileName);
    }
} 

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) {};

    @Get()
    public async getPdf(){
        return this.pdfService.getPdf();
    } 

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage(fileConfig)
        })
    ) 
    public async collectPdf(
        @UploadedFile() file: Express.Multer.File 
    ){
        return this.pdfService.collectPdf(file);
    }
}
