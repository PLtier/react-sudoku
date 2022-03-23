import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { preffiled, value } = this.props.number;
    let component;
    if (!preffiled) {
      component = <EditableElement onInput={this.props.onInput} />;
    } else {
      component = <PreffiledCell number={value} />;
    }
    return (
      <div id={this.props.id} key={this.props.id}>
        {component}
      </div>
    );
  }
}

let EditableElement = (props) => (
  <input
    type="number"
    maxLength="1"
    onInput={props.onInput}
    min="0"
    max="9"
  ></input>
);

let PreffiledCell = (props) => {
  return props.number;
};
