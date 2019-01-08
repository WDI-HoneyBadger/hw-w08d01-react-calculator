import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';

class NumberPad extends Component {

  renderTiles() {
    return tileData.map((tile, i) => {
      return (
        <Tile key={i} size={tile.size} symbol={tile.symbol} />
        <div key={i} onClick={() => {this.props.claculate(tile.symbol, tile.number)}} >
          <Tile key={i} size={tile.size} symbol={tile.symbol} />
        </div>
        
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
