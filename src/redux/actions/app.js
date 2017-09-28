import actionType from '../actionTypes';

function appLoaded() {
    return {
        type: actionType.APP_LOADED
    };
}

function updateApp(data) {
    return {
        type: actionType.UPDATE_APP,
        payload: data
    }
}

export {appLoaded, updateApp};
