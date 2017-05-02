import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from './Gallery.reducer';
let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

// Gallery Presentation Component (props only)
class Gallery extends React.Component {
    render() {
        let currentImage = this.props.images[this.props.currentIndex];
        return (
            <div>

                {/* Previous Button */}
                <button onClick={this.props.previous}>Previous</button>

                {/* Next Button */}
                <button onClick={this.props.next}>Next</button><br/>
                <img src={currentImage} key={currentImage}/>

                {/* Thumbnail Images */}
                <div>
                    {this.props.images.map((imageUrl, idx) =>
                    <img onClick={() => this.props.thumbnail(idx)} key={idx} src={imageUrl} height="60"/>
                    )}
                </div>
            </div>
        );
    }
}

// Gallery Container component
const GalleryContainer = ReactRedux.connect(
    // Map state to props
    state => ({
        currentIndex: state.currentIndex,
        images: state.images
    }),
    // Map dispatch to props
    dispatch => ({
        next: () => dispatch({ type: 'next'}),
        previous: () => dispatch({ type: 'previous'}),
        thumbnail: (idx) => dispatch({
            type: 'thumbnail',
            index: idx
        })
    })
)(Gallery);


// Render to the DOM with Provider
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <GalleryContainer/>
    </ReactRedux.Provider>,
    document.getElementById('root')
)
// Send images over to reducer function to set up state for image array
store.dispatch({
    type: 'get_images',
    images: IMAGES
})
