/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import generateModel from '../libs/generateModel';

const schema = {
    title: String,
    description: String,
    images: [String],
    attributes: [String],
    divisionId: String,
    userId: String
};
const defaultValues = {};
const ExecutableModel = generateModel('Entry', schema, defaultValues);

export default class Entry extends ExecutableModel {}
