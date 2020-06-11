const initialState = {
    globalNumber: Math.floor(Math.random() * 101)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return {globalNumber: state.globalNumber + 1};
        case 'DECREMENT': return {globalNumber: state.globalNumber - 1};
        default: return state.globalNumber;
    }
};

export default reducer;
