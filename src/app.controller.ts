import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  SavePostDTO,
  UpdateIsFavoriteDTO,
  UpdateSavedPostDTO,
} from './dto/PostDTO';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('API List')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello Guys!';
  }

  @ApiOperation({
    summary: 'Get all posts from Jsonplaceholder',
  })
  @Get('posts')
  getPostList() {
    return this.appService.getFakePost();
  }

  @ApiOperation({
    summary: 'Get one specific post from Jsonplaceholder',
  })
  @Get('posts/:id')
  getPostDetail(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getFakePost(id);
  }

  @ApiOperation({
    summary: 'Get all saved post from Jsonplaceholder',
  })
  @Get('saved')
  getAllSavedPost() {
    return this.appService.getSavedPost();
  }

  @ApiOperation({
    summary: 'Get one specific saved post from Jsonplaceholder',
  })
  @Get('saved/:id')
  getSavedPostDetail(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getSavedPost(id);
  }

  @ApiOperation({
    summary: 'Save post from Jsonplaceholder',
  })
  @Post('save')
  savePost(@Body() body: SavePostDTO) {
    return this.appService.savePost(body);
  }

  @ApiOperation({
    summary: 'Update whole saved post data',
  })
  @Put('update/:id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSavedPostDTO,
  ) {
    return this.appService.updatePost(id, body);
  }

  @ApiOperation({
    summary: 'Update favorite saved post data',
  })
  @Patch('update/favorite/:id')
  updateFavoritePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateIsFavoriteDTO,
  ) {
    return this.appService.changeFavorite(id, body);
  }

  @ApiOperation({
    summary: 'Delete saved post',
  })
  @Delete('delete/:id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteSavedPost(id);
  }
}
