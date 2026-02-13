import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // only allow the fields that are in the dto, but don't throw an error
      forbidNonWhitelisted: true, // throw an error if a field is not in the dto and API fails
      transform: true, // transform the data to the correct type. means it transform the incomming request to an instance of dto class after validation
    }
  ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
