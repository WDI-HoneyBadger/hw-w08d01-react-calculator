import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';

class NumberPad extends Component {

  renderTiles() {
    return tileData.map((tile, i) => {
      return (
        <Tile key={i} size={tile.size} symbol={tile.symbol}
         />
      )
    });
  }

  render() {
    return (
      <div key={i}
      onClick={()=>{this.props.display(tile.symbol,tile.number)}}
       className="number_pad">
       <Tile size={tile.size}
       symbol={tile.symbol}/>
        {this.renderTiles()}

      </div>
    )
  }
}

export default NumberPad;
