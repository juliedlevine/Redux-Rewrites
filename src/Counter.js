import React from 'react';

// Counter Presentation Component (props only)
export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.subtract}>-</button>
                <p>{this.props.count}</p>
                <button onClick={this.props.add}>+</button>
            </div>
        );
    }
}
