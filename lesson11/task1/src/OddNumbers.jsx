import React from "react";

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 !== 0;
  }

  render() {
    return (
      <div class="number">
        <span class="number__title">{this.props.title}</span>
        <span class="number__value">{this.props.number}</span>
      </div>
    );
  }
}
export default OddNumbers;
