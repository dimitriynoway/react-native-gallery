const initialState = { store: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                store: [...action.payload.stack]
            };
        default:
            return state;
    }
};
