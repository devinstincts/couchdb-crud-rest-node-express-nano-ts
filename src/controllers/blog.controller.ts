import { BlogService } from './../services/blog.service';

export class BlogController {

    blogService: BlogService;

    constructor() {
        this.blogService = new BlogService();
    }

    getBlog(req, res, next) {
        console.log(req.params.blogId);
        this.blogService.blog(req.params.blogId).then((data) => {
            // No content
            if (!data) {
                res.status(204).json(data);
            }
            else {
                res.status(200).json(data);
            }
        }, (err) => {
            console.log('Failed in getting blog', err);
            next(err);
        });
    }

    saveBlog(req, res, next) {
        this.blogService.saveBlog(req.body).then((data) => {
            // No content
            if (!data) {
                res.status(204).json(data);
            }
            else {
                res.status(200).json(data);
            }
        }, (err) => {
            console.log('Failed in creating blog', err);
            next(err);
        });
    }

    updateBlog(req, res, next) {
        const _rev = req.params._rev;
        const blogId = req.params.blogId;
        if (!_rev || !blogId) {
            const err = new Error('Both blogId and _rev are mandatory');
            res.status(400).json(err);
            next(err);
        }
        this.blogService.updateBlog(blogId, _rev, req.body).then((data) => {
            // No content
            if (!data) {
                res.status(204).json('No blog found with the given ID');
            }
            else {
                res.status(200).json(data);
            }
        }, (err) => {
            console.log('Failed in updating blog', err);
            next(err);
        });
    }

    deleteBlog(req, res, next) {
        console.log(req.params.blogId);
        const _rev = req.params._rev;
        const blogId = req.params.blogId;
        if (!_rev || !blogId) {
            const err = new Error('Both blogId and _rev are mandatory');
            res.status(400).json(err);
            next(err);
        }
        this.blogService.deleteBlog(blogId, _rev).then((data) => {
            // No content
            if (!data) {
                res.status(204).json('No blog found to delete');
            }
            else {
                res.status(200).json(data);
            }
        }, (err) => {
            console.log('Failed in deleting blog', err);
            next(err);
        });
    }
}
