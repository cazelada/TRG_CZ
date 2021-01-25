import { Subscription } from 'src/subscriptions/schema/subscription-schema';

export class CreateMeasureDto {
  name: string;

  id: string;

  createdAt: Date;

  subscriber: Subscription;
}
