import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>-</button>
        {this.props.count}
        <button onClick={this.props.subtract}>+</button>
      </div>
    );
  }
}

function counterReducer(state = 0, action) {
  if (action.type === 'add') {
    return state + 1;
  } else if (action.type === 'subtract') {
    return state - 1;
  } else {
    return state;
  }
}

class Switch extends React.Component {
  render() {
    let imageUrl;
    let buttonLabel;
    if (this.props.on) {
      imageUrl = 'images/bulb-on.png';
      buttonLabel = 'Off';
    } else {
      imageUrl = 'images/bulb-off.png';
      buttonLabel = 'On';
    }
    return (
      <div>
        <img src={imageUrl} width="100" alt={buttonLabel}/>
        <button onClick={this.props.toggle}>
          {buttonLabel}
        </button>
      </div>
    );
  }
}

function switchReducer(state = false, action) {
  if (action.type === 'toggle') {
    return !state;
  } else {
    return state;
  }
}


const INITIAL_STATE = {
  on: false,
  count: 0
};

function reducer(state = INITIAL_STATE, action) {
  return {
    on: switchReducer(state.on, action),
    count: counterReducer(state.count, action)
  }
}

const SwitchContainer = ReactRedux.connect(
  state => ({ on: state.on }),
  dispatch => ({
    toggle: () => dispatch({
      type: 'toggle'
    })
  })
)(Switch);

const CounterContainer = ReactRedux.connect(
  state => ({ count: state.count }),
  dispatch => ({
    add: () => dispatch({
      type: 'add'
    }),
    subtract: () => dispatch({
      type: 'subtract'
    })
  })
)(Counter); 

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <SwitchContainer/>
      <CounterContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
