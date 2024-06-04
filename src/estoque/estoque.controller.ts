import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { User } from './models/produto.entity';

@Controller('api/estoque')
export class EstoqueController {
  constructor(private readonly produtoService: ProdutoService) {}

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
  async update (@Param('id') id: number, @Body() produto: Produto): Promise<any> {
    await this.produtoService.update(id, produto);
    return { message: 'Produto updated successfully' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const produto = await this.produtoService.findOne(id);

    if (!produto) {
      throw new NotFoundException('produto does not exist!');
    }

    await this.produtoService.delete(id);
    return { message: 'Produto deleted successfully' };
  }
}

