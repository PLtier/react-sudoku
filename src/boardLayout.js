import React from 'react';
import './boardlayoutstyle.css';
import Cell from './cell.js';
export default class BoardLayout extends React.Component {
  render() {
    //console.log(this.props.data);
    return (
      <div>
        <div className="container">
          {this.props.data.map((arr, arrIndex) =>
            arr.map((number, numberIndex) => {
              const id = numberIndex + '_' + arrIndex;
              //console.log(number);
              return (
                <Cell
                  id={id}
                  key={id}
                  number={number}
                  onInput={this.props.onInput}
                />
              );
            })
          )}
        </div>
        <div>
          <button onClick={this.props.handleCheck}>Check the game</button>
          <button>Restart the game</button>
        </div>
      </div>
    );
  }
}
