import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('TV Shows API')
    .setDescription('Explore popular TV shows data with various data!')
    .setVersion('1.0')
    .addTag('TV Shows')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  const port = process.env.PORT || 3000;
  
  await app.listen(port);
}
bootstrap().catch(console.error);
