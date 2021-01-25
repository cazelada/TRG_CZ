import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeasuresModule } from './measures/measures.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MeasuresModule,
    SubscriptionsModule,
  ],
})
export class AppModule {}
