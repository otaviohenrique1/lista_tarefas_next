import React, { HTMLAttributes } from 'react'
import styled from "styled-components";
import { DimensionStyledCss, DimensionStyledTypes, MarginStyledCss, MarginStyledTypes, PaddingStyledCss, PaddingStyledTypes } from '../types/StyledTypes';

export function Flex(props: FlexProps) {
  return (
    <FlexStyled {...props} />
  )
}

type FlexStyledProps = {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self-end";
  justifyContent?: "flex-start" | "flex-end" | "start" | "end" | "left" | "right" | "center" | "space-between" | "space-around" | "space-evenly";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
  alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "start" | "end" | "baseline" | "first baseline" | "last baseline";
  rowGap?: string /* Exemplo => "10px" */ | "normal" | "initial" | "inherit";
  columnGap?: string /* Exemplo => "10px" */ | "normal" | "initial" | "inherit";
  order?: number | "initial" | "inherit";
  alignSelf?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
  flexGrow?: number | "initial" | "inherit";
  flexShrink?: number | "initial" | "inherit";
  flexBasis?: number | "auto" | "initial" | "inherit";
} & DimensionStyledTypes & PaddingStyledTypes & MarginStyledTypes;

type FlexProps = HTMLAttributes<HTMLDivElement> & FlexStyledProps;

const FlexStyled = styled.div<FlexStyledProps>`
  display: flex !important;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  align-content: ${(props) => props.alignContent};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  order: ${(props) => props.order};
  align-self: ${(props) => props.alignSelf};
  flex-wrap: ${(props) => props.flexWrap};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-basis: ${(props) => props.flexBasis};
  ${DimensionStyledCss}
  ${PaddingStyledCss}
  ${MarginStyledCss}
`;

/*
import React, { HTMLAttributes } from 'react'
import styled from "styled-components";
import { DimensionStyledCss, DimensionStyledTypes, MarginStyledCss, MarginStyledTypes, PaddingStyledCss, PaddingStyledTypes } from '../types/StyledTypes';

export function Flex(props: FlexProps) {
  return (
    <FlexStyled {...props} />
  )
}

type FlexStyledProps = {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self-end";
  justifyContent?: "flex-start" | "flex-end" | "start" | "end" | "left" | "right" | "center" | "space-between" | "space-around" | "space-evenly";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
  alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "start" | "end" | "baseline" | "first baseline" | "last baseline";
  rowGap?: string | "normal" | "initial" | "inherit";
  columnGap?: string | "normal" | "initial" | "inherit";
  order?: number | "initial" | "inherit";
  alignSelf?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
  flexGrow?: number | "initial" | "inherit";
  flexShrink?: number | "initial" | "inherit";
  flexBasis?: number | "auto" | "initial" | "inherit";
} & DimensionStyledTypes & PaddingStyledTypes & MarginStyledTypes;

type FlexProps = HTMLAttributes<HTMLDivElement> & FlexStyledProps;

const FlexStyled = styled.div<FlexStyledProps>`
  display: flex !important;
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-content: ${(props) => props.alignContent || "stretch"};
  row-gap: ${(props) => props.rowGap || "normal"};
  column-gap: ${(props) => props.columnGap || "normal"};
  order: ${(props) => props.order || 0};
  align-self: ${(props) => props.alignSelf || "auto"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-shrink: ${(props) => props.flexShrink || 1};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  ${DimensionStyledCss}
  ${PaddingStyledCss}
  ${MarginStyledCss}
`;
*/
