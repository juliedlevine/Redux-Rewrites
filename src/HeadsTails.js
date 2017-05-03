import React from 'react';

// Heads Tails Presentation component
export default class HeadsTails extends React.Component {
  render() {
    return (
      <div>
        <img alt="Coin" key={this.props.headsTails} src={this.props.headsTails}/>
        <button onClick={this.props.flip}>
          Flip!
        </button>
      </div>
    );
  }
}
