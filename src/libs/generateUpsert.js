'use strict';

/**
 * Created by Leonid on 26/02/17.
 */

function createExecutor(model) {
    return (_, params, ctx) => {
        const {_id: id} = params;

        if (id) {
            delete params._id;
            return model.findOneAndUpdate({_id: id}, params);
        }

        const en = new model(params); // eslint-disable-line new-cap

        return en.save();
    };
}

export default (objects) => {
    if (Array.isArray(objects)) {
        const willReturn = {};

        objects.forEach((object) => {
            const keys = Object.keys(object);
            const name = keys[0];

            if (!name) {
                throw new Error('Upsert object can\'t be blank');
            }
            const upName = `upsert${[name]}`;

            willReturn[upName] = createExecutor(object[name]);
        });

        return willReturn;
    }

    return {};
};
