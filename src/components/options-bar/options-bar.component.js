// import {
//   ButtonGroup,
//   ButtonInput,
//   GroupButton,
//   Label,
//   OptionsBarContainer,
// } from "./options-bar.styles";
//
// function OptionsBarComponent() {
//   return (
//     <OptionsBarContainer>
//       <ButtonGroup>
//         <GroupButton>
//           <ButtonInput id={"layout-1"} type={"radio"} name={"layout-group"} />
//           <Label htmlFor="layout-1">Web</Label>
//         </GroupButton>
//         <GroupButton>
//           <ButtonInput id={"layout-2"} type={"radio"} name={"layout-group"} />
//           <Label htmlFor="layout-2">Mobile</Label>
//         </GroupButton>
//         <GroupButton>
//           <ButtonInput id={"layout-3"} type={"radio"} name={"layout-group"} />
//           <Label htmlFor="layout-3">Tablet</Label>
//         </GroupButton>
//       </ButtonGroup>
//       <ButtonGroup>
//         <GroupButton>
//           <ButtonInput id={"theme-1"} type={"radio"} name={"theme-group"} />
//           <Label htmlFor="theme-1">Light</Label>
//         </GroupButton>
//         <GroupButton>
//           <ButtonInput id={"theme-2"} type={"radio"} name={"theme-group"} />
//           <Label htmlFor="theme-2">Dark</Label>
//         </GroupButton>
//         <GroupButton>
//           <ButtonInput id={"theme-3"} type={"radio"} name={"theme-group"} />
//           <Label htmlFor="theme-3">Mixed</Label>
//         </GroupButton>
//       </ButtonGroup>
//     </OptionsBarContainer>
//   );
// }
//
// export default OptionsBarComponent;

import { useState } from "react";
import {
  ButtonGroup,
  GroupButton,
  OptionsBarContainer,
} from "./options-bar.styles";

function OptionsBarComponent() {
  const [activeLayout, setActiveLayout] = useState("layout-1");
  const [activeTheme, setActiveTheme] = useState("theme-1");

  const handleLayoutChange = (e) => {
    setActiveLayout(e.target.id);
  };

  const handleThemeChange = (e) => {
    setActiveTheme(e.target.id);
  };

  return (
    <OptionsBarContainer>
      <ButtonGroup>
        <GroupButton
          active={activeLayout === "layout-1"}
          onClick={handleLayoutChange}
          id="layout-1"
        >
          Web
        </GroupButton>
        <GroupButton
          active={activeLayout === "layout-2"}
          onClick={handleLayoutChange}
          id="layout-2"
        >
          Mobile
        </GroupButton>
        <GroupButton
          active={activeLayout === "layout-3"}
          onClick={handleLayoutChange}
          id="layout-3"
        >
          Tablet
        </GroupButton>
      </ButtonGroup>
      <ButtonGroup>
        <GroupButton
          active={activeTheme === "theme-1"}
          onClick={handleThemeChange}
          id="theme-1"
        >
          Light
        </GroupButton>
        <GroupButton
          active={activeTheme === "theme-2"}
          onClick={handleThemeChange}
          id="theme-2"
        >
          Dark
        </GroupButton>
        <GroupButton
          active={activeTheme === "theme-3"}
          onClick={handleThemeChange}
          id="theme-3"
        >
          Mixed
        </GroupButton>
      </ButtonGroup>
    </OptionsBarContainer>
  );
}

export default OptionsBarComponent;
