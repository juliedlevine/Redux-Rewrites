import React from 'react';

// Counter Presentation Component (props only)
export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.subtract}>-</button>
                {this.props.count}
                <button onClick={this.props.add}>+</button>
            </div>
        );
    }
}
