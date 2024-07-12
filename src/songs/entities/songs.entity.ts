import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("songs")
export class SongEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string

  @Column("varchar", { array: true })
  artists: string[]

  @Column({ type: "date" })
  releaseDate: Date

  @Column({ type: 'time' })
  duration: Date

  @Column({ type: "text" })
  lyrics: string
}