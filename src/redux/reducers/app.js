import actionType from '../actionTypes';

const defaultState = {
    appLoaded: false,
    updateApp: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.APP_LOADED:
            return {
                ...state,
                appLoaded: true
            };
        case actionType.UPDATE_APP:
            const count = state.updateApp + action.payload;

            return {
                ...state,
                updateApp: count
            };
        default: {
            return state;
        }
    }
};
