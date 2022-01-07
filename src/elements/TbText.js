import React from "react";
import styled from "styled-components";

const TbText = (props) => {
  const {
    bold,
    color,
    size,
    align,
    margin,
    children,
    LHeight,
    family,
    padding,
    _onClick,
    deco,
    decoP,
    cursor,
    max_width,
    bg
  } = props;

  const styles = {
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    align: align,
    LHeight: LHeight,
    family: family,
    padding: padding,
    deco: deco,
    decoP: decoP,
    cursor: cursor,
    max_width: max_width,
    bg:bg
  };

  return (
    <>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </>
  );
};

TbText.defaultProps = {
  cihldren: null,
  bold: false,
  color: "",
  size: "18px",
  align: false,
  margin: false,
  padding: false,
  max_width: false,
  bg: false,
  family: "KOTRAHOPE",
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  max-width: ${(props) => (props.max_width ? `${props.max_width}` : "")};
  font-family: ${(props) => (props.family ? `${props.family}` : "")};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? `${props.bold}` : "")};
  text-align: ${(props) => (props.align ? `${props.align}` : "")};
  line-height: ${(props) => (props.LHeight ? `${props.LHeight}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  word-break: break-all;
  letter-spacing: -0.5px;
  word-break: break-all;
  letter-spacing: -0.5px;
  background-color: ${(props) => (props.bg ? ` ${props.bg};` : "")};
  text-decoration: ${(props) => (props.deco ? `${props.deco}` : "")};
  text-underline-position: ${(props) => (props.decoP ? `${props.decoP}` : "")};
  cursor: ${(props) => (props.cursor ? `${props.cursor}` : "")};
`;

export default TbText;
