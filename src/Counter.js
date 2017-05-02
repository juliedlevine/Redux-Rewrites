import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from './Counter.reducer';
let store = Redux.createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Counter Presentation Component (props only)
class Counter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.subtract}>-</button>
                {this.props.counter}
                <button onClick={this.props.add}>+</button>
            </div>
        );
    }
}

// Counter Container component (manages state and dispatch)
const CounterContainer = ReactRedux.connect(
    state => ({ counter: state }),
    dispatch => ({
        add: () => dispatch({ type: 'add'}),
        subtract: () => dispatch({ type: 'subtract'})
    })
)(Counter)


// Render to the DOM
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <CounterContainer/>
    </ReactRedux.Provider>,
    document.getElementById('root')
);
