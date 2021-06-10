import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServive: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServive.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `movie after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesServive.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesServive.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesServive.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
