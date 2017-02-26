/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import generateModel from '../libs/generateModel';

const schema = {
    name: String,
    logo: String
};
const defaultValues = {};
const ExecutableModel = generateModel('Entry', schema, defaultValues);

export default class Entry extends ExecutableModel {}
