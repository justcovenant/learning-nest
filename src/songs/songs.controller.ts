import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/createSong.dto';
import { SongEntity } from './entities/songs.entity';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll(): Promise<SongEntity[]> {
    return this.songsService.getAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.getOne(id)
  }

  @Post()
  create(@Body() body: CreateSongDTO): Promise<SongEntity> {
    return this.songsService.createSong(body);
  }

  @Put(':id') 
  updateOne() {
    return 'update one base on id'
  }

  @Delete(':id')
  deleteOne() {
    return 'delete one base on id'
  }
}
