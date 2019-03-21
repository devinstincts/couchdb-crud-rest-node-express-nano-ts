import * as express from 'express';
import * as routes from './routes';
import * as bodyParser from 'body-parser';

class App {

    public express;

    constructor() {
        this.express = express();
        // parse application/json
        this.express.use(bodyParser.json({limit: '900mb'}));
        this.mountHomeRoute();
        this.errorHandler();
    }

    // Prepare the / route to show a hello world page
    private mountHomeRoute(): void {
        const router = express.Router();
        router.use('/dev-instincts/couch-node-express-nano-crud', routes.blogRoutes);
        this.express.use('/', router);
    }

    private errorHandler() {
        this.express.use((err, req, res, next) => {
            let status: any = err.status;
            if (!status) {
                status = 500;
            }
            res.status(status).json(err);
        });

    }
}

export default new App().express;
