import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('This is my first nestjs project')
    .setDescription('Rest api documentation')
    .setVersion('1.0.0')
    .addTag('Gewalt79')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document);

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
