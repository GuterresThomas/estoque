import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { Produto } from './models/produto.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [EstoqueService],
  controllers: [EstoqueController]
})
export class EstoqueModule {}
