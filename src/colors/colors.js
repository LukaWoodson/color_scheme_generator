// import React, { useRef, useState } from "react";
// import tinycolor from "tinycolor2";
// import {
//   CardWrapper,
//   ColorCard,
//   ShadesWrapper,
//   TextBox,
//   Wrapper,
// } from "./styles";
//
// function ColorsComponent() {
//   const inputColorRef = useRef(null);
//   const [colors, setColors] = useState({
//     inputColor: "",
//     textColor: "",
//     shades: {
//       100: "",
//       200: "",
//       300: "",
//       400: "",
//       500: "",
//       600: "",
//     },
//     tints: {
//       100: "",
//       200: "",
//       300: "",
//       400: "",
//       500: "",
//       600: "",
//     },
//     triad: {
//       100: "",
//       200: "",
//       300: "",
//     },
//     tetrad: {
//       100: "",
//       200: "",
//       300: "",
//       400: "",
//     },
//     monochromatic: {
//       100: "",
//       200: "",
//       300: "",
//       400: "",
//       500: "",
//       600: "",
//     },
//     analogous: {
//       100: "",
//       200: "",
//       300: "",
//       400: "",
//       500: "",
//       600: "",
//     },
//     splitComp: {
//       100: "",
//       200: "",
//       300: "",
//     },
//   });
//
//   const handleColorChange = () => {
//     // NOTE: update colors from input here
//     setColors({
//       ...colors,
//       inputColor: "#" + tinycolor(inputColorRef.current.value).toHex(),
//       textColor: tinycolor(inputColorRef.current.value.toString())?.isDark()
//         ? "#ffffff"
//         : "#000000",
//       // NOTE: write methods to loop through populating the other objects
//     });
//     inputColorRef.current.value = colors.inputColor;
//   };
//
//   return (
//     <Wrapper>
//       <TextBox>
//         <input placeholder={"Enter a hex value"} ref={inputColorRef} />
//       </TextBox>
//       <button onClick={handleColorChange}>Get Values</button>
//       <h1>
//         {`Original Color: `}
//         <span
//           style={{
//             background: colors.inputColor,
//             color: colors.textColor,
//           }}
//           onChange={() => console.log(colors.textColor)}
//         >
//           {colors.inputColor}
//         </span>
//       </h1>
//       <h2>Shades:</h2>
//       <ShadesWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 100</span>
//         </CardWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 200</span>
//         </CardWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 300</span>
//         </CardWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 400</span>
//         </CardWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 500</span>
//         </CardWrapper>
//         <CardWrapper>
//           <ColorCard>{"#ffffff"}</ColorCard>
//           <span>Shade 600</span>
//         </CardWrapper>
//         <h2>Tints:</h2>
//         <CardWrapper></CardWrapper>
//       </ShadesWrapper>
//     </Wrapper>
//   );
// }
//
// export default ColorsComponent;

import React, { useRef, useState } from "react";
import tinycolor from "tinycolor2";
import {
  CardWrapper,
  ColorCard,
  ShadesWrapper,
  TextBox,
  Wrapper,
} from "./styles";

function ColorsComponent() {
  const inputColorRef = useRef(null);
  const [colors, setColors] = useState({
    inputColor: "",
    textColor: "",
    shades: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
    },
    tints: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
    },
    triad: {
      100: "",
      200: "",
      300: "",
    },
    tetrad: {
      100: "",
      200: "",
      300: "",
      400: "",
    },
    monochromatic: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
    },
    analogous: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
    },
    splitComp: {
      100: "",
      200: "",
      300: "",
    },
  });

  const handleColorChange = () => {
    const newInputColor = "#" + tinycolor(inputColorRef.current.value).toHex();
    const newTextColor = tinycolor(newInputColor).isDark()
      ? "#ffffff"
      : "#000000";
    const newShades = {};

    // populate shades object with darker shades of input color
    let s = 0;
    for (let i = 1; i <= 6; i++) {
      newShades[parseInt(`${i}00`)] = tinycolor(newInputColor)
        .darken(s)
        .toHexString();
      s += 6;
    }

    setColors({
      ...colors,
      inputColor: newInputColor,
      textColor: newTextColor,
      shades: newShades,
    });
    inputColorRef.current.value = newInputColor;
  };

  return (
    <Wrapper>
      <TextBox>
        <input placeholder={"Enter a hex value"} ref={inputColorRef} />
      </TextBox>
      <button onClick={handleColorChange}>Get Values</button>
      <h1>
        {`Original Color: `}
        <span
          style={{
            background: colors.inputColor,
            color: colors.textColor,
          }}
        >
          {colors.inputColor}
        </span>
      </h1>
      <h2>Shades:</h2>
      <ShadesWrapper>
        {Object.keys(colors.shades).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.shades[key],
                color: colors.textColor,
              }}
            >
              {colors.shades[key]}
            </ColorCard>
            <span>{`Shade ${key}`}</span>
          </CardWrapper>
        ))}
      </ShadesWrapper>
      <h2>Tints:</h2>
      <ShadesWrapper>
        {/* TODO: Populate tints object and render cards */}
      </ShadesWrapper>
      {/* TODO: Render other color palettes */}
    </Wrapper>
  );
}

export default ColorsComponent;
