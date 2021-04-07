import styled from "styled-components/macro";

export const MontB4Bold = styled.p`
  font-family: ${({theme}) => theme.font.family.montserrat};
  font-size: ${({theme}) => theme.font.size.b4};
  font-weight: 700;
`

// Default global font style is located in html tag in GlobalStyles!!!