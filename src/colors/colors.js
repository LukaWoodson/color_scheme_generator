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
    // NOTE: update colors from input here
    setColors({
      ...colors,
      inputColor: "#" + tinycolor(inputColorRef.current.value).toHex(),
      textColor: tinycolor(inputColorRef.current.value.toString())?.isDark()
        ? "#ffffff"
        : "#000000",
      // NOTE: write methods to loop through populating the other objects
    });
    inputColorRef.current.value = colors.inputColor;
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
          onChange={() => console.log(colors.textColor)}
        >
          {colors.inputColor}
        </span>
      </h1>
      <h2>Shades:</h2>
      <ShadesWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 100</span>
        </CardWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 200</span>
        </CardWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 300</span>
        </CardWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 400</span>
        </CardWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 500</span>
        </CardWrapper>
        <CardWrapper>
          <ColorCard>{"#ffffff"}</ColorCard>
          <span>Shade 600</span>
        </CardWrapper>
      </ShadesWrapper>
    </Wrapper>
  );
}

export default ColorsComponent;
