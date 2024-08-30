import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Post } from './typeorm/entities/post';
import { Repository } from 'typeorm';
import {
  SavePostDTO,
  FakePostInterface,
  UpdateSavedPostDTO,
  UpdateIsFavoriteDTO,
} from './dto/PostDTO';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async getFakePost(id?: number) {
    return (
      await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`,
      )
    ).data as FakePostInterface[] | FakePostInterface;
  }

  async getSavedPost(id?: number) {
    if (id) return this.postRepository.findOneBy({ id });
    return this.postRepository.find();
  }

  async savePost(createPostData: SavePostDTO) {
    const getPostData = (
      await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${createPostData.postId}`,
      )
    ).data as FakePostInterface;
    createPostData['body'] = getPostData.body;
    createPostData['title'] = getPostData.title;
    const new_data = this.postRepository.create(createPostData);
    await this.postRepository.save(new_data);
    return 'Post saved successfully';
  }

  async updatePost(id: number, updatePostData: UpdateSavedPostDTO) {
    const update_data = this.postRepository.create(updatePostData);
    await this.postRepository.update({ id }, update_data);
    return 'Post updated successfully';
  }

  async changeFavorite(id: number, favortieData: UpdateIsFavoriteDTO) {
    const update_favorite = this.postRepository.create(favortieData);
    await this.postRepository.update({ id }, update_favorite);
    return 'Post favorite updated successfully';
  }

  async deleteSavedPost(id: number) {
    await this.postRepository.delete({ id });
    return 'Saved post deleted successfully';
  }
}
