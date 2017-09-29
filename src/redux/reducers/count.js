import actionType from '../actionTypes';

const defaultState = {
    counter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default: {
            return state;
        }
    }
};
