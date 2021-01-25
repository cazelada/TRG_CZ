import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Measure, MeasureDocument } from './schema/measure-schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMeasureDto } from './dto/create-measure.dto';

@Injectable()
export class MeasuresService {
  constructor(
    @InjectModel(Measure.name)
    private readonly measureModel: Model<MeasureDocument>,
  ) {}

  async createMeasure(createMeasureDto: CreateMeasureDto) {
    const measure = await this.measureModel.create(createMeasureDto);

    return measure.save();
  }
}
