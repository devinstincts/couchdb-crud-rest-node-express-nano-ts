import * as express from 'express';
import { BlogController } from '../controllers/blog.controller';

const blogController = new BlogController();

class BlogRoutes {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/blogs/:blogId', blogController.getBlog.bind(blogController));
    router.post('/blogs', blogController.saveBlog.bind(blogController));
    router.put('/blogs/:blogId/:_rev', blogController.updateBlog.bind(blogController));
    router.delete('/blogs/:blogId/:_rev', blogController.deleteBlog.bind(blogController));
    // load routes
    this.express.use('', [
      router
    ]);
  }
}

export const blogRoutes = new BlogRoutes().express;
