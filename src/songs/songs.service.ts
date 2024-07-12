import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongEntity } from './entities/songs.entity';
import { Repository } from 'typeorm';
import { CreateSongDTO } from './dto/createSong.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(SongEntity)
    private songRepository: Repository<SongEntity>,
  ) {}

  private readonly songs = [];

  async createSong(songDTO: CreateSongDTO): Promise<SongEntity> {
    const song = new SongEntity()
    song.title = songDTO.title
    song.artists = songDTO.artists
    song.duration= songDTO.duration
    song.lyrics = songDTO.lyrics
    song.releaseDate = songDTO.releasedDate 

    return await this.songRepository.save(song)
  }

  async getAll(): Promise<SongEntity[]> {
    return await this.songRepository.find();
  }

  async getOne(id: string): Promise<SongEntity> {
    return await this.songRepository.findOneBy({ id })
  }
}
