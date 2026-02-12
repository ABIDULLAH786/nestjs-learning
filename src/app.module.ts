import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckModule } from './check/check.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [CheckModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
