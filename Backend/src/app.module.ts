import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PdfModule
  ]
})
export class AppModule {}
