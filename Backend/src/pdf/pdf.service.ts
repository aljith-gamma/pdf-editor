import { Injectable, StreamableFile } from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";

@Injectable()
export class PdfService {

    async getPdf(){
        const file = createReadStream(join(process.cwd(), 'uploads/example.pdf') );
        return new StreamableFile(file);
    }

    async collectPdf(file: Express.Multer.File) { 
        return {
            status: true,
            message: 'PDF saved successfully!'
        }
    }
}