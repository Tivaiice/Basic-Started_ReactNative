import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

  const reducer = (state, action) => { 

     // state === {red : number, green : number, red : number };
     // action === {colorToChange : 'red' || 'green' || 'blue' , amount : 15 || -15 }
  
    switch (action.type) {
      case 'change_red' :
        state.red + action.payload > 255 || state.red + action.payload < 0
          ? state 
          : { ...state, red: state.red + action.payload};
      case 'change_green' :
        state.green + action.payload > 255 || state.green + action.payload < 0
          ? state 
          : { ...state, green: state.green + action.payload};
      case 'change_blue' :
        state.blue + action.payload > 255 || state.blue + action.payload < 0
          ? state 
          : { ...state, blue: state.blue + action.payload};
      default : 
        return state;
    }
}

  const [state, type] = useReducer(reducer, {red : 0, green : 0, blue : 0});
  const {red, blue, green} = state;
  
  return (
    <View>
      <ColorCounter
        onIncrease={() => type({ colorToChange: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => type({ colorToChange: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => type({ colorToChange: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => type({ colorToChange: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <ColorCounter 
        onIncrease={() => type({ colorToChange: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => type({ colorToChange: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb( ${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;


// import React, { useState } from "react";
// import { Text, StyleSheet, View } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const setColor = (color, change) => {
//     // color === 'red', 'green', 'blue'
//     // change === +15, -15
//     switch (color) {
//       case 'red': 
//         red + change > 255 || red + change < 0 ? null : setRed( red + change );
//         return;
//       case 'green': 
//         green + change > 255 || green + change < 0 ? null : setGreen( green + change );
//         return;
//       case 'blue': 
//         blue + change > 255 || blue + change < 0 ? null : setBlue( blue + change );
//         return;
//       default:
//         return;
//       }
//   }

//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setColor('red', COLOR_INCREMENT)}
//         onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//         color="Red"
//       />
//       <ColorCounter
//         onIncrease={() => setColor(green, COLOR_INCREMENT)}
//         onDecrease={() => setColor(green, COLOR_INCREMENT)}
//         color="Blue"
//       />
//       <ColorCounter 
//         onIncrease={() => setColor(blue, COLOR_INCREMENT)}
//         onDecrease={() => setColor (blue, COLOR_INCREMENT)}
//         color="Green"
//       />

//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb( ${red}, ${green}, ${blue})`,
//         }}
//       />
//     </View>
//   );
// };

// export default SquareScreen;
