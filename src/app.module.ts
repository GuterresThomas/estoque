import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
    }),
  DatabaseModule,
  EstoqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
