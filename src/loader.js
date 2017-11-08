import {getOptions} from 'loader-utils';
import validateOptions from 'schema-utils';
import {
    template,
    pickBy,
    pick
} from 'lodash';
import schema from './schema';

export default function (source) {
    const options = getOptions(this) || {};
    validateOptions(schema,options,'Loader/Plugin Name');
    let keys = Object.keys(pickBy(schema && schema.properties,(value) => {
        return value && !value.noPick;
    }));
    let compilerOptions = pick(options,keys);
    let compiler = template(source,compilerOptions);
    source = compiler(options.data);
    console.log(source)
    return `export default ${ JSON.stringify(source) }`;
};