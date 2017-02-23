/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import {makeExecutableSchema} from 'graphql-tools';
import * as typeDefs from './typeDefs.graphqls';
import resolvers from './resolvers';

const log = global.logger || global.console;

let schema;

try {
    schema = makeExecutableSchema({
        resolvers,
        typeDefs,
        logger: log
    });
} catch (e) {


    log.error('Schema error', e.message);
}

export default schema;
