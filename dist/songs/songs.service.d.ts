import { SongEntity } from './entities/songs.entity';
import { Repository } from 'typeorm';
import { CreateSongDTO } from './dto/createSong.dto';
export declare class SongsService {
    private songRepository;
    constructor(songRepository: Repository<SongEntity>);
    private readonly songs;
    createSong(songDTO: CreateSongDTO): Promise<SongEntity>;
    getAll(): Promise<SongEntity[]>;
    getOne(id: string): Promise<SongEntity>;
}
