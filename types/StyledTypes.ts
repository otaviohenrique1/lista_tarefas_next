import { css } from "styled-components";

export const DimensionStyledCss = css<DimensionStyledTypes>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
`;

export const PaddingStyledCss = css<PaddingStyledTypes>`
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
`;

export const MarginStyledCss = css<MarginStyledTypes>`
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export type DimensionStyledTypes = {
  width?: "auto" | string | "initial" | "inherit";
  minWidth?: "auto" | string | "initial" | "inherit";
  maxWidth?: "auto" | string | "initial" | "inherit";
  height?: "auto" | string | "initial" | "inherit";
  minHeight?: "auto" | string | "initial" | "inherit";
  maxHeight?: "auto" | string | "initial" | "inherit";
}

export type PaddingStyledTypes = {
  padding?: "auto" | string | "initial" | "inherit";
  paddingTop?: "auto" | string | "initial" | "inherit";
  paddingBottom?: "auto" | string | "initial" | "inherit";
  paddingLeft?: "auto" | string | "initial" | "inherit";
  paddingRight?: "auto" | string | "initial" | "inherit";
}

export type MarginStyledTypes = {
  margin?: "auto" | string | "initial" | "inherit";
  marginTop?: "auto" | string | "initial" | "inherit";
  marginBottom?: "auto" | string | "initial" | "inherit";
  marginLeft?: "auto" | string | "initial" | "inherit";
  marginRight?: "auto" | string | "initial" | "inherit";
}

/*
import { css } from "styled-components";

export const DimensionStyledCss = css<DimensionStyledTypes>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  max-height: ${(props) => props.maxHeight || "none"};
  min-width: ${(props) => props.minWidth || "0"};
  min-height: ${(props) => props.minHeight || "0"};
`;

export const PaddingStyledCss = css<PaddingStyledTypes>`
  padding: ${(props) => props.padding || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
`;

export const MarginStyledCss = css<MarginStyledTypes>`
  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
`;

export type DimensionStyledTypes = {
  width?: "auto" | string | "initial" | "inherit";
  minWidth?: "auto" | string | "initial" | "inherit";
  maxWidth?: "auto" | string | "initial" | "inherit";
  height?: "auto" | string | "initial" | "inherit";
  minHeight?: "auto" | string | "initial" | "inherit";
  maxHeight?: "auto" | string | "initial" | "inherit";
}

export type PaddingStyledTypes = {
  padding?: "auto" | string | "initial" | "inherit";
  paddingTop?: "auto" | string | "initial" | "inherit";
  paddingBottom?: "auto" | string | "initial" | "inherit";
  paddingLeft?: "auto" | string | "initial" | "inherit";
  paddingRight?: "auto" | string | "initial" | "inherit";
}

export type MarginStyledTypes = {
  margin?: "auto" | string | "initial" | "inherit";
  marginTop?: "auto" | string | "initial" | "inherit";
  marginBottom?: "auto" | string | "initial" | "inherit";
  marginLeft?: "auto" | string | "initial" | "inherit";
  marginRight?: "auto" | string | "initial" | "inherit";
}
*/
