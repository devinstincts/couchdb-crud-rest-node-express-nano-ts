import * as config from 'config';
import { EnvConstants } from '../util/env.constants';
import { ErrorCode } from '../util/error.codes';
import { blogDB } from './common';

const BLOG_DESIGN_DOCUMENT_ID = config.get(
  EnvConstants.BLOG_DESIGN_DOCUMENT_ID
);
const BLOG_DB_INDEX_NAME = config.get(EnvConstants.BLOG_DB_INDEX_NAME);

export class BlogService {

  blog(blogId: string) {
    return new Promise<any>((resolve, reject) => {
      blogDB.get(blogId).then(
        body => {
          console.log(body);
          if (body) {
            resolve(body);
          } else {
            resolve();
          }
        },
        err => {
          console.log(err);
          resolve();
        }
      );
    });
  }

  saveBlog(blog: any) {
    return new Promise<any>((resolve, reject) => {
      blogDB.insert(blog).then(
        result => {
          resolve(result);
        },
        err => {
          reject(ErrorCode.dbCommunicationErrorObj(err.message));
        }
      );
    });
  }

  updateBlog(blogId: string, _rev: string, blog: any) {
    return new Promise<any>((resolve, reject) => {
      blogDB.insert({
        ...blog,
        _id: blogId,
        _rev
      }).then(
        result => {
          resolve(result);
        },
        err => {
          reject(ErrorCode.dbCommunicationErrorObj(err.message));
        }
      );
    });
  }

  deleteBlog(blogId: string, _rev: string) {
    return new Promise<any>((resolve, reject) => {
      blogDB.destroy(blogId, _rev).then(
        result => {
          resolve(result);
        },
        err => {
          console.log(err);
          reject(ErrorCode.dbCommunicationErrorObj(err.message));
        }
      );
    });
  }
}
