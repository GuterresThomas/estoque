import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Produto} from './models/produto.entity';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne({ where: { id } });
  }

  async create(produto: Partial<Produto>): Promise<Produto> {
    const newProduto = this.produtoRepository.create(produto);
    return this.produtoRepository.save(newProduto);
  }

  async update(id: number, produto: Partial<Produto>): Promise<Produto> {
    await this.produtoRepository.update(id, produto);
    return this.produtoRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
