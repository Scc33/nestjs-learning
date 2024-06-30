import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getAllSongs() {
    return this.songsService.findAll();
  }

  @Get(':id')
  getSongById(@Param('id') id: string) {
    return `find song with id ${id}`;
  }

  @Put(':id')
  updateSong(@Param('id') id: string) {
    // Logic to update a song
  }

  @Post()
  createSong() {
    this.songsService.create("Glass Animals");
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string) {
    // Logic to delete a song
  }
}
