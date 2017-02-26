'use strict';

/**
 * Created by Leonid on 23/02/17.
 */
import User from '../../../models/User';
import Division from '../../../models/Division';
import Entry from '../../../models/Entry';

const resolvers = {
    Query: {
        users: (_, params, ctx) => User.find(),
        divisions: (_, params, ctx) => Division.find()
    },
    Mutation: {
        createUser: (_, {username, email}, ctx) => {
            const u = new User({username, email});

            return u.save();
        },
        createDivision: (_, params, ctx) => {
            const d = new Division(params);

            return d.save();
        },
        upsertEntry: (_, params, ctx) => {
            const {_id: id} = params;

            if (id) {
                delete params._id;
                return Entry.findOneAndUpdate({_id: id}, params);
            }

            const en = new Entry(params);

            return en.save();
        }
    },
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
