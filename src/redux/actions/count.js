import actionType from '../actionTypes';

function increment() {
    console.log('increment')

    return {
        type: actionType.INCREMENT
    };
}

function decrement() {
    return {
        type: actionType.DECREMENT
    };
}

export {increment, decrement};
