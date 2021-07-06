import React from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = (props) => {
  return <div>{props.isOnline ? <Online /> : <Offline />}</div>;
};
export default Status;

// class Status extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOnline: false,
//     };
//   }
//   onButton = () => {
//     // console.log(34);
//     this.setState = {
//       isOnline: true,
//     };
//   };
//   x;
//   render() {
//     console.log(this);
//     console.log(this.state);
//     console.log(this.state.isOnline);
//     return (
//       <div>
//         {this.state.isOnline ? (
//           <Online isOnline={this.state.isOnline} />
//         ) : (
//           <Offline isOnline={this.onButton} />
//         )}
//       </div>
//     );
//   }
// }
