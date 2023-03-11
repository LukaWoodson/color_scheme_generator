import React, { useRef, useState } from "react";
import tinycolor from "tinycolor2";
import { TextBox, Wrapper } from "./styles";

function ColorsComponent() {
  const inputColorRef = useRef(null);
  const [inputColor, setInputColor] = useState("");
  const [hexColor, setHexColor] = useState("");

  const handleColorChange = () => {
    console.log(tinycolor(inputColorRef.current.value));
    setHexColor(
      tinycolor(inputColorRef.current.value.toString())?.isDark()
        ? "#ffffff"
        : "#000000"
    );
    console.log({ hexColor });
    setInputColor("#" + tinycolor(inputColorRef.current.value).toHex());
    inputColorRef.current.value = inputColor;
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
            background: inputColor,
            color: hexColor,
          }}
          onChange={() => console.log(hexColor)}
        >
          {inputColor}
        </span>
      </h1>
    </Wrapper>
  );
}

export default ColorsComponent;
