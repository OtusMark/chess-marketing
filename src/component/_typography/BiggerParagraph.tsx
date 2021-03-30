import styled from "styled-components/macro";

export const BiggerParagraph = styled.p`
  font-size: ${({theme}) => theme.font.size.b2};
  font-weight: 300;
  line-height: 1.5;
`