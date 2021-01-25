import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private _subscriptions: SubscriptionsService) {}

  @Post()
  async createSubscriber(
    @Res() response: Response,
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ) {
    try {
      createSubscriptionDto.id = uuidv4();
      console.log(createSubscriptionDto);
      const subscriber = await this._subscriptions.createSubscriber(
        createSubscriptionDto,
      );
      return response.status(HttpStatus.CREATED).json({ subscriber });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }
}
