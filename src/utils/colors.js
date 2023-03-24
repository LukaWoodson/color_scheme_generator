import { useState } from "react";
import tinycolor from "tinycolor2";

export const useColorGenerator = () => {
  const initalColors = {
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
  };

  const [colors, setColors] = useState(initalColors);

  const handleColors = (colorValue) => {
    let newInputColor = "#" + tinycolor(colorValue).toHex();
    let newTextColor = tinycolor(newInputColor).isDark()
      ? "#ffffff"
      : "#000000";
    let newShades = { ...colors.shades };
    let newTints = { ...colors.tints };
    let newSplitComp = { ...colors.splitComp };
    let newTriad = { ...colors.triad };
    let newTetrad = { ...colors.tetrad };
    let newMono = { ...colors.monochromatic };
    let newAnalogous = { ...colors.analogous };

    let mult = 5;
    for (let i = 1; i <= 6; i++) {
      newShades[parseInt(`${i}00`)] = tinycolor(newInputColor)
        .darken(mult)
        .toHexString();
      newTints[parseInt(`${i}00`)] = tinycolor(newInputColor)
        .lighten(mult)
        .toHexString();
      mult += 5;
    }

    for (let i = 1; i <= 2; i++) {
      const colorArray = tinycolor(newInputColor).splitcomplement();
      newSplitComp[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    for (let i = 1; i <= 2; i++) {
      const colorArray = tinycolor(newInputColor).triad();
      newTriad[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    for (let i = 1; i <= 3; i++) {
      const colorArray = tinycolor(newInputColor).tetrad();
      newTetrad[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    for (let i = 1; i <= 5; i++) {
      const colorArray = tinycolor(newInputColor).monochromatic();
      newMono[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    for (let i = 1; i <= 5; i++) {
      const colorArray = tinycolor(newInputColor).analogous();
      newAnalogous[parseInt(`${i}00`)] = tinycolor(colorArray[i]).toHexString();
    }

    setColors({
      ...colors,
      inputColor: newInputColor,
      textColor: newTextColor,
      shades: newShades,
      tints: newTints,
      splitComp: newSplitComp,
      triad: newTriad,
      tetrad: newTetrad,
      monochromatic: newMono,
      analogous: newAnalogous,
    });
  };

  return { colors, handleColors };
};
