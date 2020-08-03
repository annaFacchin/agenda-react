import { SET_STATUM } from '../actions/actionTypes';
import { STATUM } from '../../constants';

const initialState = STATUM.TODO;

const statum = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUM: {
            return action.payload.statum;
        }
        default: {
            return state;
        }
    }
};

export default statum;