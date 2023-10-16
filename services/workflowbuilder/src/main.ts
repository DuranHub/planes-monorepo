import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(`⚡️ Running on http://localhost:3000`);

  const config = new DocumentBuilder()
    .setTitle('Workflow Builder Services')
    .setDescription(
      'Service dedicated to link data inputs to activities, and activities to entities, aimed to create a Procedure Project',
    )
    .setVersion('0.0.1')
    .addTag('Workflow Builder Service')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
