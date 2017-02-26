/**
 * Created by Leonid on 23/02/17.
 */
'use strict';
import generateModel from '../libs/generateModel';

const schema = {
    username: String,
    email: String,
    role: String
};
const defaultValues = {
    role: 'USER'
};
const ExecutableModel = generateModel('User', schema, defaultValues);

export default class User extends ExecutableModel {}
