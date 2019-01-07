import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';

class NumberPad extends Component {

  renderTiles() {
    return tileData.map((tile, i) => {
      return (
        <div
        onClick={()=>{this.props.updateNumber(i)}}>
          <Tile key={i} size={tile.size} symbol={tile.symbol} />
        </div>
      )
    });
  }

  render() {
    return (
      <div className="number_pad">
        {this.renderTiles(this.props.numbers)}
      </div>
    )
  }
}

export default NumberPad;
