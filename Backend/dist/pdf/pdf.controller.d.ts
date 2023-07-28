/// <reference types="multer" />
import { PdfService } from "./pdf.service";
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    getPdf(): Promise<import("@nestjs/common").StreamableFile>;
    collectPdf(file: Express.Multer.File): Promise<{
        status: boolean;
        message: string;
    }>;
}
