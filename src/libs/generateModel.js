/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import Mongoose from 'mongoose';

export default (name, schema = {}, defaults = {}) => {
    if (typeof name !== 'string') {
        throw new Error(`${name} is not a string, argument name is required`);
    }

    const mschema = Mongoose.Schema(schema, {timestamps: true});
    const Model = Mongoose.model(name, mschema);

    return class ExecutableModel extends Model {
        constructor(defs) {
            const entries = Object.assign({}, defaults, defs);

            super(entries);
        }
    };
};
