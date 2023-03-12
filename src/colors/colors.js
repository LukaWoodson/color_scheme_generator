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
  ColorInput,
  GetValuesButton,
  SectionTitle,
  SectionWrapper,
  TextBox,
  Title,
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
    comp: "",
    splitComp: {
      100: "",
      200: "",
    },
    triad: {
      100: "",
      200: "",
    },
    tetrad: {
      100: "",
      200: "",
      300: "",
    },
    monochromatic: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
    },
    analogous: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
    },
  });

  const handleColorChange = () => {
    let newInputColor = "#" + tinycolor(inputColorRef.current.value).toHex();
    let newTextColor = tinycolor(newInputColor).isDark()
      ? "#ffffff"
      : "#000000";
    let newShades = {};
    let newTints = {};
    let newComp = {};
    let newSplit = {};
    let newTriad = {};
    let newTetrad = {};
    let newMono = {};
    let newAnalo = {};

    // populate shades object with darker shades of input color
    let mult = 5;
    for (let i = 1; i <= 6; i++) {
      newShades[parseInt(`${i}00`)] = tinycolor(newInputColor)
        .darken(mult)
        .toHexString();
      mult += 5;
    }

    // populate tints object with lighter tints of input color
    mult = 5;
    for (let i = 1; i <= 6; i++) {
      newTints[parseInt(`${i}00`)] = tinycolor(newInputColor)
        .lighten(mult)
        .toHexString();
      mult += 5;
    }

    // populate splitComp object based on input color
    newComp = tinycolor(newInputColor).complement().toHexString();

    // populate splitComp object based on input color
    for (let i = 1; i <= 2; i++) {
      const colorArray = tinycolor(newInputColor).splitcomplement();
      newSplit[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    // populate triad object based on input color
    for (let i = 1; i <= 2; i++) {
      const colorArray = tinycolor(newInputColor).triad();
      newTriad[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    // populate tetrad object based on input color
    for (let i = 1; i <= 3; i++) {
      const colorArray = tinycolor(newInputColor).tetrad();
      newTetrad[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    // populate monochromatic object based on input color
    for (let i = 1; i <= 5; i++) {
      const colorArray = tinycolor(newInputColor).monochromatic();
      newMono[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    // populate analogous object based on input color
    for (let i = 1; i <= 5; i++) {
      const colorArray = tinycolor(newInputColor).analogous();
      newAnalo[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    setColors({
      ...colors,
      inputColor: newInputColor,
      textColor: newTextColor,
      shades: newShades,
      tints: newTints,
      comp: newComp,
      splitComp: newSplit,
      triad: newTriad,
      tetrad: newTetrad,
      monochromatic: newMono,
      analogous: newAnalo,
    });

    inputColorRef.current.value = newInputColor;
  };

  return (
    <Wrapper>
      <Title>Theme Palette Generator</Title>
      <TextBox>
        <ColorInput placeholder={"Enter a hex value"} ref={inputColorRef} />
        <GetValuesButton onClick={handleColorChange}>
          Get Values
        </GetValuesButton>
      </TextBox>
      <SectionTitle>{`Original Color: `}</SectionTitle>
      <SectionWrapper>
        <CardWrapper>
          <ColorCard
            style={{
              backgroundColor: colors.inputColor,
              color: colors.textColor,
            }}
          >
            {colors.inputColor}
          </ColorCard>
        </CardWrapper>
      </SectionWrapper>
      <SectionTitle>Shades:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.shades).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.shades[key],
                color: tinycolor(colors.shades[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.shades[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>Tints:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.tints).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.tints[key],
                color: tinycolor(colors.tints[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.tints[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>{`Complementary: `}</SectionTitle>
      <SectionWrapper>
        <CardWrapper>
          <ColorCard
            style={{
              backgroundColor: colors.comp,
              color: tinycolor(colors.comp)?.isDark() ? "#ffffff" : "#000000",
            }}
          >
            {colors.comp}
          </ColorCard>
        </CardWrapper>
      </SectionWrapper>
      <SectionTitle>Split Complementary:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.splitComp).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.splitComp[key],
                color: tinycolor(colors.splitComp[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.splitComp[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>Triad:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.triad).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.triad[key],
                color: tinycolor(colors.triad[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.triad[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>Tetrad:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.tetrad).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.tetrad[key],
                color: tinycolor(colors.tetrad[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.tetrad[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>Monochromatic:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.monochromatic).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.monochromatic[key],
                color: tinycolor(colors.monochromatic[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.monochromatic[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
      <SectionTitle>Analogous:</SectionTitle>
      <SectionWrapper>
        {Object.keys(colors.analogous).map((key) => (
          <CardWrapper key={key}>
            <ColorCard
              style={{
                backgroundColor: colors.analogous[key],
                color: tinycolor(colors.analogous[key])?.isDark()
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {colors.analogous[key]}
            </ColorCard>
            <span>{`${key}`}</span>
          </CardWrapper>
        ))}
      </SectionWrapper>
    </Wrapper>
  );
}

export default ColorsComponent;
