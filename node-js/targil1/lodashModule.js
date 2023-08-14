import _ from 'lodash';

function reverse(data){
    return _.reverse(data.split(/\s+/)).join(" ");
}

function uniq(data){
    return _.uniq(data.split(/\s+/)).join(" ");
}


export {reverse, uniq}