import { Module } from "@nestjs/common";
import { PdfController } from "./pdf.controller";
import { PdfService } from "./pdf.service";
import { MulterModule } from "@nestjs/platform-express";
import { memoryStorage } from "multer";


@Module({
    imports: [
        MulterModule.register({
            dest: './upload',
        })
    ],
    controllers: [PdfController],
    providers: [PdfService]
})

export class PdfModule {};