import { Module } from '@nestjs/common';
import { Produto } from 'src/estoque/models/produto.entity.ts'


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