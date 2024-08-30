import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class SavePostDTO {
  @ApiProperty({ default: 2 })
  @IsNumber()
  postId: number;
  @ApiProperty({ default: false })
  @IsBoolean()
  isFavorite: boolean;
  @IsString()
  @ApiProperty({ default: 'Technology' })
  category: string;
}

export class UpdateSavedPostDTO {
  @ApiProperty({ default: 'My Name is Lorem Ipsum' })
  @IsString()
  title: string;
  @ApiProperty({
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  })
  @IsString()
  body: string;
  @ApiProperty({ default: false })
  @IsBoolean()
  isFavorite: boolean;
  @IsString()
  @ApiProperty({ default: 'Politic' })
  category: string;
}

export class UpdateIsFavoriteDTO {
  @ApiProperty({ default: true })
  @IsBoolean()
  isFavorite: boolean;
}

export interface FakePostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
