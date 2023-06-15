import { Injectable } from '@nestjs/common';
import { UserIntercafe } from './interface/user.interface';
import axios from 'axios';
import { Post1Interface } from './interface/post1.interface';

type postDataType = {
  title: string;
  body: string;
  userId: number;
};

@Injectable()
export class PlaceholderService {
  async getUser(): Promise<UserIntercafe> {
    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data);
  }

  async getAllUser(): Promise<UserIntercafe[]> {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.data);
  }

  async getComments(postId: number): Promise<Post1Interface> {
    console.log(postId);
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.data);
  }

  async tryPost(data: postDataType) {
    const { title, body, userId } = data;
    const ret = await axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId,
      })
      .then((res) => res.data);
    console.log(ret);
    return ret;
  }
}
