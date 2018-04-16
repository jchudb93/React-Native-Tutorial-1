export const DATA_AVAILABLE = 'DATA_AVAILABLE'

import Data from '../instructions.json'

export const getData = () => {
    return (dispatch) => {
        setTimeout(() => {
            const data = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data: data})
        }, 2000);
    };
}