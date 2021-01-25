import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
import { Subscription } from 'src/subscriptions/schema/subscription-schema';

export type MeasureDocument = Measure & Document;

@Schema()
export class Measure {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ type: sc.Types.ObjectId, ref: 'Subscription' })
  subscriber: Subscription;
}

export const MeasureSchema = SchemaFactory.createForClass(Measure);
