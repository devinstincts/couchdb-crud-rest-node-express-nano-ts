import app from './app';
import { EnvConstants } from './util/env.constants';

import * as config from 'config';

const port = config.get(EnvConstants.PORT);

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
