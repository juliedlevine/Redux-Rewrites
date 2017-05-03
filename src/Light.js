import React from 'react';

// Light Presentation Component (props only)
export default class Light extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>{this.props.on ? 'Off' : 'On'}</button>
                <img src={this.props.on ? 'images/bulb-on.png' : 'images/bulb-off.png'}></img>
            </div>
        );
    }
}
