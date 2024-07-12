"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const songs_entity_1 = require("./entities/songs.entity");
const typeorm_2 = require("typeorm");
let SongsService = class SongsService {
    constructor(songRepository) {
        this.songRepository = songRepository;
        this.songs = [];
    }
    async createSong(songDTO) {
        const song = new songs_entity_1.SongEntity();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;
        song.releaseDate = songDTO.releasedDate;
        return await this.songRepository.save(song);
    }
    async getAll() {
        return await this.songRepository.find();
    }
    async getOne(id) {
        return await this.songRepository.findOneBy({ id });
    }
};
exports.SongsService = SongsService;
exports.SongsService = SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(songs_entity_1.SongEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SongsService);
//# sourceMappingURL=songs.service.js.map