import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Orphanage from './Orphanage';

@Entity('images')
class Image {

  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}

export default Image;