
import * as config from 'config';
import * as nano from 'nano';
import { EnvConstants } from '../util/env.constants';

const blogDBOpts = {
    url: config.get<string>(EnvConstants.COUCHDB_URL) + config.get<string>(EnvConstants.DATABASE_BLOG)
};
export const blogDB: any = nano(blogDBOpts);

export const couchDB: any = nano({
    url: config.get(EnvConstants.COUCHDB_URL)
});
