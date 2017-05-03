import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

// Import components and reducers
import Gallery from './Gallery';
import galleryReducer from './Gallery.reducer';
import Counter from './Counter';
import counterReducer from './Counter.reducer';
import HeadsTails from './HeadsTails';
import headsTailsReducer from './HeadsTails.reducer';
import Dragon from './Dragon';
import dragonReducer from './Dragon.reducer'

// Combo reducer - reference these keys in Containers to set up state
const reducer = Redux.combineReducers({
    gallery: galleryReducer,
    count: counterReducer,
    headsTails: headsTailsReducer,
    dragon: dragonReducer
})

// Gallery Container component
const GalleryContainer = ReactRedux.connect(
    // Map state from combo reducer to props. Look at state in reducer to see what needs to go in here.
    state => ({
        currentIndex: state.gallery.currentIndex,
        images: state.gallery.images
    }),
    // Map dispatch to props. Look at props/methods in component to see what needs to go in here.
    dispatch => ({
        next: () => dispatch({ type: 'next'}),
        previous: () => dispatch({ type: 'previous'}),
        thumbnail: (idx) => dispatch({
            type: 'thumbnail',
            index: idx
        })
    })
)(Gallery);

// Counter Container component
const CounterContainer = ReactRedux.connect(
    state => ({ count: state.count }),
    dispatch => ({
        add: () => dispatch({ type: 'add'}),
        subtract: () => dispatch({ type: 'subtract'})
    })
)(Counter)

// HeadsTails Container Component
const HeadsTailsContainer = ReactRedux.connect(
    state => ({
        headsTails: state.headsTails
    }),
    dispatch => ({
        flip: () => {
            var num = Math.random();
            if (num >= 0.5) {
                dispatch({type: 'tails'})
            } else {
                dispatch({type: 'heads'})
            }
        }
    })
)(HeadsTails)

// Dragon Container Component
const DragonContainer = ReactRedux.connect(
    state => ({
        dragon_health: state.dragon.dragon_health,
        hero_health: state.dragon.hero_health,
        message: state.dragon.message,
        game_over: state.dragon.game_over
    }),
    dispatch => ({
        fight: () => {
            let fight = Math.random();
            if (fight >= 0.5) {
                dispatch({ type: 'damage_dragon' })
            } else {
                dispatch({ type: 'damage_hero' })
            }
        },
        flight: () => dispatch({ type: 'flight' }),
        play_again: () => dispatch({ type: 'play_again'})
    })
)(Dragon)

// Create store
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Render to DOM
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <div>
            <GalleryContainer/>
            <CounterContainer/>
            <HeadsTailsContainer/>
            <DragonContainer/>
        </div>
    </ReactRedux.Provider>,
    document.getElementById('root')
);

// Send images over to reducer function to set up state for image array
const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];
store.dispatch({
    type: 'get_images',
    images: IMAGES
})
