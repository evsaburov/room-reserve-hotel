import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { CheckInModule } from './check-in/check-in.module';

@Module({
  imports: [RoomModule, CheckInModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
