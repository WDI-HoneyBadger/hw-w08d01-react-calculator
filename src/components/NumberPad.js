import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';

class NumberPad extends Component {

  renderTiles() {
    return tileData.map((tile, i) => {
      return (
        // <div onClick={ () => this.props.updateDisplayedNumber(this.symbol) }>
          <Tile key={i} size={tile.size} symbol={tile.symbol} number={tile.number}
                updateDisplayedNumber={this.props.updateDisplayedNumber}
                updateOperand={this.props.updateOperand}
                updateOperator={this.props.updateOperator}
                calculate={this.props.calculate}
                operatorPressed={this.props.operatorPressed}
                clear={this.props.clear}
                negate={this.props.negate}/>
        // </div>
      )
    });
  }

  render() {
    return (
      <div className="number_pad">
        {this.renderTiles()}
      </div>
    )
  }
}

export default NumberPad;
