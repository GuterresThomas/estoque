import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantidade: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  editado_em: Date;
}
