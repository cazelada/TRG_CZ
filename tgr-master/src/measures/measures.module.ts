import { Measure, MeasureSchema } from './schema/measure-schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeasuresController } from './measures.controller';
import { MeasuresService } from './measures.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Measure.name, schema: MeasureSchema }]),
  ],
  controllers: [MeasuresController],
  providers: [MeasuresService],
})
export class MeasuresModule {}
