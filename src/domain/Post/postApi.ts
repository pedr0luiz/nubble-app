import {postListMock} from './postListMock';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  return Promise.resolve(postListMock);
}

export const postApi = {
  getList,
};
