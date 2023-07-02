import {
  ColorGuide,
  Desc,
  HeadWrapper,
  TextBox,
  Title,
} from "./title-desc.styles";

function TitleDesc() {
  return (
    <HeadWrapper>
      <Title>Color Scheme Generator</Title>
      <TextBox>
        <ColorGuide>
          <strong>Dark/Mixed - 100</strong>: For body background color
        </ColorGuide>
        <ColorGuide>
          <strong>Dark/Mixed - 200</strong>: For cards background color
        </ColorGuide>
        <ColorGuide>
          <strong>Dark/Mixed - 300</strong>: For chips buttons, dropdowns
          background color
        </ColorGuide>
        <ColorGuide>
          <strong>Dark/Mixed - 400</strong>: For sidebars, navbar background
          color
        </ColorGuide>
        <ColorGuide>
          <strong>Dark/Mixed - 500</strong>: For modal, dialogs background color
        </ColorGuide>
        <ColorGuide>
          <strong>Dark/Mixed - 600</strong>: For on background texts color
        </ColorGuide>
        <Desc>
          Clicking a color tile below will copy the hex color to your clipboard.
        </Desc>
      </TextBox>
    </HeadWrapper>
  );
}

export default TitleDesc;
