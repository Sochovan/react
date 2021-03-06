import React from "react";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      divTextElem: "",
    };
  }
  onChangeTextColor = (colorName) => {
    this.setState({
      divTextElem: colorName,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.divTextElem}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.onChangeTextColor(CORAL)}
            onMouseOut={() => this.onChangeTextColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.onChangeTextColor(AQUA)}
            onMouseOut={() => this.onChangeTextColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.onChangeTextColor(BISQUE)}
            onMouseOut={() => this.onChangeTextColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// class ColorPicker extends React.Component {
//   onChangeTextColor = (name) => {
//     const divElem = document.querySelector(".picker__title");
//     divElem.textContent = name;
//   };
//   onClean = () => {
//     const divElem = document.querySelector(".picker__title");
//     divElem.textContent = "";
//   };
//   render() {
//     return (
//       <div>
//         <div className="picker__title">Red</div>
//         <div>
//           <button
//             className="picker__button picker__button_coral"
//             onMouseOver={() => this.onChangeTextColor(CORAL)}
//             onMouseOut={() => this.onClean()}
//           ></button>
//           <button
//             className="picker__button picker__button_aqua"
//             onMouseOver={() => this.onChangeTextColor(AQUA)}
//             onMouseOut={() => this.onClean()}
//           ></button>
//           <button
//             className="picker__button picker__button_bisque"
//             onMouseOver={() => this.onChangeTextColor(BISQUE)}
//             onMouseOut={() => this.onClean()}
//           ></button>
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;
