/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import {Router} from 'express';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import schema from './src/schema';

export default ({api = true, path = '/graphql', graphiql = true, graphiPath = '/graphiql'}) => {
    const graphqlMiddleware = new Router();

    if (api) {
        logger.log(`Graphql API enabled on route ${path}`);
        graphqlMiddleware.use(path, graphqlExpress({
            schema,
            context: {
                authorization: {
                    isAuthorized: () => graphiql
                }
            }
        }));

        if (graphiql) {
            logger.log(`Graphiql debug tool enabled on route ${graphiPath}`);
            graphqlMiddleware.use(graphiPath, graphiqlExpress({
                endpointURL: path
            }));
        }
    }

    return graphqlMiddleware;
};
