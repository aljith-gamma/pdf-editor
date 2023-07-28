/// <reference types="multer" />
import { StreamableFile } from "@nestjs/common";
export declare class PdfService {
    getPdf(): Promise<StreamableFile>;
    collectPdf(file: Express.Multer.File): Promise<{
        status: boolean;
        message: string;
    }>;
}
