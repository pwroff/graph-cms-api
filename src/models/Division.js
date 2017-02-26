/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import generateModel from '../libs/generateModel';

const schema = {
    title: String,
    description: String
};
const defaultValues = {};
const ExecutableModel = generateModel('Division', schema, defaultValues);

export default class Division extends ExecutableModel {}
