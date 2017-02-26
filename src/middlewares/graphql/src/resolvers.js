'use strict';

/**
 * Created by Leonid on 23/02/17.
 */
import User from '../../../models/User';
import Division from '../../../models/Division';
import Entry from '../../../models/Entry';
import generateUpsert from '../../../libs/generateUpsert';

const Upserts = generateUpsert([
    {User},
    {Division},
    {Entry}
]);

const Mutation = Object.assign({

}, Upserts);

const resolvers = {
    Query: {
        users: (_, params, ctx) => User.find(),
        divisions: (_, params, ctx) => Division.find()
    },
    Mutation,
    Division: {
        entries: (division, params, ctx) => Entry.find({
            divisionId: division._id
        })
    },
    Entry: {
        author: (entry, prams, ctx) => User.findById(entry.userId),
        division: (entry, prams, ctx) => Division.findById(entry.divisionId)
    }
};

export default resolvers;
