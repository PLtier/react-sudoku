import React from 'react';
import file from './files.json';
import BoardLayout from './boardLayout.js';
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      board: [],
    };
  }

  handleInput(event) {
    this.setState((state) => {
      let newBoard = state.board;
      const id = event.target.parentNode.getAttribute('id');
      const x = Number(id[0]),
        y = Number(id[2]);
      //console.log(x, y);
      //console.log(event.target.value);
      newBoard[y][x].value = Number(event.target.value);
      return { board: newBoard };
    });
    console.log(this.state.board);
  }

  handleCheck(event) {
    //Użyj new Set. Dla wiersza zrób set z niego i sprawdź długość, dla kolumny to samo tylko trochę żmudniej OFC)
    //skorzystaj z tego https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array
    let copyState = [...this.state.board];
    function check(array) {
      array = array.map((el) => el.value);
      console.log(new Set(array));
      return new Set(array).size === 9;
    }
    //check line
    const rowRight = copyState.every(function (array) {
      return check(array);
    });
    console.log(copyState, 'copy');
    let columns = [];
    let columnRight = false;

    label: {
      for (let i = 0; i < 9; i++) {
        let arr = [];
        for (let io = 0; io < 9; io++) {
          let value = copyState[io][i].value;
          if (value == false) break label;
          else arr.push({ value: value });
        }
        columns.push(arr);
      }

      columnRight = columns.every(function (array) {
        return check(array);
      });
      console.log(columnRight, 'columnRight');
    }
    console.log(columns, 'columns');

    console.log(rowRight, columnRight);
    if (rowRight && columnRight) alert('Done');
    else alert('Not done');
  }

  componentDidMount() {
    class Cell {
      preffiled = false;
      value = false;
    }
    //objects are passed by reference, therefore if we want to reuse them on their own we need a class or Object.assign.
    //syntax array.from
    let newBoard = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => new Cell())
    );
    //console.log(newBoard, 'hej');

    file.numbers.forEach((el) => {
      let { x, y } = el;
      newBoard[y][x].value = el.value;
      newBoard[y][x].preffiled = true;
    });
    //console.log(newBoard);

    this.setState({
      board: newBoard,
    });

    //this.state.board = 9;
  }

  render() {
    return (
      <div>
        <BoardLayout
          data={this.state.board}
          onInput={this.handleInput}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}
