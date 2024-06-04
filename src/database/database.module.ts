import { Module } from '@nestjs/common';
import { Produto } from 'src/estoque/models/produto.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule], 
        inject: [ConfigService],
  
        useFactory: async (configService: ConfigService) => ({
          type: 'postgres',
          url: configService.get('DATABASE_URL'), 
          entities: [Produto],
          synchronize: true
        }),
      }),
    ],
  })

  export class DatabaseModule {}