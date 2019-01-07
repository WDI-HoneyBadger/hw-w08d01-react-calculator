import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';


class NumberPad extends Component {

  renderTiles(props) {
    
    return tileData.map((tile, i) => {
      return (
        <Tile key={i} size={tile.size} symbol={tile.symbol} number={tile.number} calculator={props} />
        
      )
    });
  }
 

  render() {
    return (
      <div className="number_pad">
        {this.renderTiles(this.props)}
        
      </div>
    )
  }
}

export default NumberPad;
