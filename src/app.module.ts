import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ServicesModule, MongooseModule.forRoot("mongodb+srv://bharathnagapuri:A8Ey047eVPXRBpRd@cluster0.epqyyl4.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
