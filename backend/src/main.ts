import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config";

console.log('MONGODB_URI:', process.env.MONGODB_URI);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Permite apenas o frontend local
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
