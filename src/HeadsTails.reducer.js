function reducer(state = 'images/quarter-back.png', action) {
    if (action.type === 'heads') {
        return state = 'images/quarter-front.png';
    } else if (action.type === 'tails') {
        return state = 'images/quarter-back.png';
    } else {
        return state;
    }
}

export default reducer;
