// These should match what's in the index container's state
const INITIAL_STATE = {
    currentIndex: 0,
    images: []
}

function reducer(state = INITIAL_STATE, action) {

    // Recieve images from dispatch and add them to state
    if (action.type === 'get_images') {
        return Object.assign({}, state, {
            images: action.images
        })
    }

    // Next button clicked
    if (action.type === 'next') {
        if (state.currentIndex >= state.images.length - 1) {
            return Object.assign({}, state, {
                currentIndex: 0
            })
        } else {
            return Object.assign({}, state, {
                currentIndex: state.currentIndex + 1
            })
        }

    // Thumbnail image clicked
    } else if (action.type === 'thumbnail') {
        return Object.assign({}, state, {
            // Get new index from action dispatch
            currentIndex: action.index
        })

    // Previous button clicked
    } else if (action.type === 'previous') {
        if (state.currentIndex <= 0) {
            return Object.assign({}, state, {
                currentIndex: state.images.length - 1
            })
        } else {
            return Object.assign({}, state, {
                currentIndex: state.currentIndex - 1
            })
        }

    // Catch all
    } else {
        return state
    }
}

export default reducer;
