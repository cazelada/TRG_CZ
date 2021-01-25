import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import {
  Subscription,
  SubscriptionDocument,
} from './schema/subscription-schema';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private readonly subscriptionModel: Model<SubscriptionDocument>,
  ) {}

  async getAllMeasures() {
    // return await this.subscriptionModel.find();
  }

  async createSubscriber(createSubscriptionDto: CreateSubscriptionDto) {
    const subscriber = await this.subscriptionModel.create(
      createSubscriptionDto,
    );

    return await subscriber.save();
  }
}
