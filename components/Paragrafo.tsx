import styled from "styled-components";

type ParagrafoStyledProps = {
  feito: boolean;
};

export const Paragrafo = styled.p<ParagrafoStyledProps> `
  text-decoration: ${(props) => (props.feito) ? "line-through" : "none"};
`;
