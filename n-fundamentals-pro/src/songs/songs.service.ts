import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local db

  private readonly songs = [];

  create(song) {
    this.songs.push(song);
  }

  findAll() {
    return this.songs;
  }
}
