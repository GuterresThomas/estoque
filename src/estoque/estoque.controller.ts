import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { Produto } from './models/produto.entity';

@Controller('api/estoque')
export class EstoqueController {
  constructor(private readonly produtoService: EstoqueService) {}

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Post()
  @HttpCode(201) 
  async create(@Body() produto: Produto): Promise<Produto> {
    const createdProduto = await this.produtoService.create(produto);
    return createdProduto;
  }

  @Put(':id')
  async update (@Param('id') id: string, @Body() produto: Partial<Produto>): Promise<Produto> {
    const existingProduto = await this.produtoService.findOne(id);

    if (!existingProduto) {
      throw new NotFoundException('Produto does not exist!');
    }

    existingProduto.quantidade = produto.quantidade;
    existingProduto.editado_em = new Date();

    await this.produtoService.update(id, existingProduto);
    return existingProduto;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    const produto = await this.produtoService.findOne(id);

    if (!produto) {
      throw new NotFoundException('produto does not exist!');
    }

    await this.produtoService.delete(id);
    return { message: 'Produto deleted successfully' };
  }
}

