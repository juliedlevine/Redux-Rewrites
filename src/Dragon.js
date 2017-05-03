import React from 'react';

export default class DragonGame extends React.Component {
    render() {
        return (
            <div>
                <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300" alt="dragon"/><br/>

                {/* Dragon Health */}
                <label>Dragon: {this.props.dragon_health}</label>&nbsp;

                {/* Hero Health */}
                <label>Hero: {this.props.hero_health}</label>

                {/* Message text */}
                <br/>{this.props.message}<br/>

                {/* Fight Button */}
                <button disabled={this.props.game_over} onClick={this.props.fight}>Fight</button>

                {/* Flight Button */}
                <button disabled={this.props.game_over} onClick={this.props.flight}>Flight</button>

                {/* Play Again Button */}
                {this.props.game_over ? <button onClick={this.props.play_again}>Play Again</button> : <br/>}
            </div>
        );
  }
}
