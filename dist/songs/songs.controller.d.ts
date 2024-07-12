import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/createSong.dto';
import { SongEntity } from './entities/songs.entity';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    findAll(): Promise<SongEntity[]>;
    findOne(id: string): Promise<SongEntity>;
    create(body: CreateSongDTO): Promise<SongEntity>;
    updateOne(): string;
    deleteOne(): string;
}
